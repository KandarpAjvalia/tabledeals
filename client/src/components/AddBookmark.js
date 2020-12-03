import React, {
	useContext,
	useEffect,
	useState
} from 'react'
import { IconButton } from '@chakra-ui/core'
import { useQuery } from '@apollo/client'
import { Context as UserContext } from '../context/UserContext'
import { GET_USER_DEAL_BOOKMARK_QUERY } from '../graphql/queries'

// eslint-disable-next-line react/prop-types
const AddBookmark = ({ dealId }) => {
	const userContext = useContext(UserContext)
	const userId = userContext.state.user && userContext.state.user.sub
	const { isAuthenticated } = userContext.state

	const gqlUserDealExists = useQuery(GET_USER_DEAL_BOOKMARK_QUERY, {
		variables: {
			dealId,
			userId,
		}
	})

	/* useEffect(() => {
		if (gqlUserDealExists.data) {
			if (gqlUserDealExists.data.user_deal.length) {
				setCurrentBookmark(gqlUserDealExists.data.user_deal[0].isBookmarked)
			}
		}
    }, gqlUserDealExists.data)
    */

	const onBookmark = () => {
		if (gqlUserDealExists.data) {
			if (gqlUserDealExists.data.user_deal.length) {
				console.log('Hello, World!')
			}
		}
		console.log('Bookmark button was clicked testing')
		console.log(userId)
		console.log(dealId)
		console.log()
	}
	return (
		<>
			<IconButton
				aria-label="Upvote"
				icon="star"
				size="sm"
				fontSize="20px"
				onClick={() => onBookmark()}
				variant="ghost"
				color="gray.400"
			/>
		</>
	)
}
export default AddBookmark
