import React, {
	useState, useRef, useEffect, useContext
} from 'react'
import { useQuery, useMutation } from '@apollo/client'
import {
	Stack, Textarea, Text, IconButton
} from '@chakra-ui/core'
import Auth from 'aws-amplify'
import { useForm } from 'react-hook-form'
import { Context as UserContext } from '../context/UserContext'
import Comment from './Comment'
import { CREATE_COMMENT_MUTATION } from '../graphql/mutations'
import { GET_COMMENTS_BY_ID_QUERY } from '../graphql/queries'

const CommentCard = ({id}) => {
	const [createComment] = useMutation(CREATE_COMMENT_MUTATION)
	const userContext = useContext(UserContext)
	const [comment, setComment] = useState('')
	const [comments, setComments] = useState([])
	const { loading, error, data } = useQuery(GET_COMMENTS_BY_ID_QUERY, {
		variables: { id },
	})
	console.log(data)
	useEffect(() => {
		if (data && data.user_deal) {
			setComments(data.user_deal)
		}
	}, [data])

	if (loading) return null
	if (error) return 'Error loading the details'
	// const onCreateComment = async ({
	// 	comment
	// }) => {
	// 	console.log(`Sent ` + comment)
	// 	const user = await Auth.currentAuthenticatedUser()
	// 	const idToken = user.signInUserSession.idToken.jwtToken

	// 	createComment({
	// 		variables: comment,
	// 		context: {
	// 			headers: {
	// 				Authorization: `Bearer ${idToken}`
	// 			}
	// 		}
	// 	})
	// }

	const handleInputChange = (evt) => {
		const inputValue = evt.target.value
		setComment(inputValue)
	}
	// isDisabled={!userContext.state.isAuthenticated}
	
	// <IconButton variantColor="blue" aria-label="Send Comment" icon="chevron-right" onClick={onCreateComment({ comment })} />
	return (
		<Stack>
			<Text fontSize="md" fontWeight="semibold" lineHeight="short">Comments</Text>
			<Textarea placeholder="Thoughts on this deal..." resize="none" value={comment} onChange={handleInputChange} size="sm" />
			{comments && comments.map((comment) => {
				return (
					<Stack>
						<Comment username={comment.user_id} commentText={comment.comment}/>
					</Stack>
				)
			})}
			
		</Stack>
	)
}

export default CommentCard
