import React, {
	useState, useEffect, useContext
} from 'react'
import { useQuery, useMutation } from '@apollo/client'
import {
	Stack, Textarea, Text, IconButton
} from '@chakra-ui/core'
import { Auth } from 'aws-amplify'
import { Context as UserContext } from '../context/UserContext'
import Comment from './Comment'
import { UPSERT_COMMENT_MUTATION } from '../graphql/mutations'
import { GET_COMMENTS_BY_ID_QUERY } from '../graphql/queries'

// eslint-disable-next-line react/prop-types
const CommentCard = ({ dealId }) => {
	const userContext = useContext(UserContext)
	const userId = userContext.state.user && userContext.state.user.sub

	const [comment, setComment] = useState('')
	const [comments, setComments] = useState([])

	const [upsertComment] = useMutation(UPSERT_COMMENT_MUTATION)
	const { loading, error, data } = useQuery(GET_COMMENTS_BY_ID_QUERY, {
		variables: { dealId },
	})

	useEffect(() => {
		if (data && data.user_deal) {
			setComments(data.user_deal)
		}
	}, [data])

	if (loading) return null
	if (error) return 'Error loading the details'

	const onCreateComment = async () => {
		const user = await Auth.currentAuthenticatedUser()
		const idToken = user.signInUserSession.idToken.jwtToken

		const upsertCommentVariables = {
			id: userId + dealId,
			dealId,
			comment
		}
		upsertComment({
			variables: upsertCommentVariables,
			context: {
				headers: {
					Authorization: `Bearer ${idToken}`
				}
			},
			update: (cache) => {
				const { name, picture } = userContext.state.user
				const filtered = [...comments].filter((prevComment) => (
					prevComment.user.id !== userId
				))
				const updatedComments = [...filtered, {
					comment,
					user: {
						id: userId,
						name,
						profile_pic: picture
					}
				}]
				setComments(updatedComments)
				cache.writeQuery({
					query: GET_COMMENTS_BY_ID_QUERY,
					variables: {
						dealId
					},
					data: {
						user_deal: updatedComments
					}
				})
			}
		})
		setComment('')
	}

	const handleInputChange = (evt) => {
		const inputValue = evt.target.value
		setComment(inputValue)
	}

	const onEnterPress = (evt) => {
		if (evt.keyCode === 13 && evt.shiftKey === false) {
			evt.preventDefault()
			onCreateComment()
		}
	}
	return (
		<Stack>
			<Text fontSize="md" fontWeight="semibold" lineHeight="short">Comments</Text>
			<Stack isInline>
				<Textarea
					isDisabled={!userContext.state.isAuthenticated}
					onKeyDown={onEnterPress}
					placeholder="Thoughts on this deal..."
					_placeholder={{
						color: 'black'
					}}
					resize="none"
					value={comment}
					onChange={handleInputChange}
					size="sm"
				/>
				<IconButton
					isDisabled={!userContext.state.isAuthenticated}
					variantColor="orange"
					maxWidth="10px"
					height="80px"
					aria-label="Send Comment"
					icon="chevron-right"
					onClick={() => onCreateComment()}
				/>
			</Stack>
			{comments && comments.map((dbComment) => (
				<Stack
					key={dbComment.user.name}
				>
					{dbComment.comment && (
						<Comment
							username={dbComment.user.name}
							commentText={dbComment.comment}
							profile_pic={dbComment.user.profile_pic}
						/>
					)}
				</Stack>
			))}

		</Stack>
	)
}

export default CommentCard
