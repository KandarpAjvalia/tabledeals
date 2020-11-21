import React, {
	useContext,
} from 'react'
import { IconButton } from '@chakra-ui/core'
import { Context as UserContext } from '../context/UserContext'

const AddBookmark = ({ dealId }) => {
	const userContext = useContext(UserContext)
	const userId = userContext.state.user && userContext.state.user.sub
	const { isAuthenticated } = userContext.state

	const onBookmark = () => {
		console.log('Bookmark button was clicked testing')
		console.log(userId)
		console.log(dealId)
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
