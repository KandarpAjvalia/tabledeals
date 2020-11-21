import React from 'react'
import { IconButton } from '@chakra-ui/core'

const AddBookmark = ({ dealId }) => {
	const onBookmark = () => {
		console.log('Bookmark button was clicked testing')
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
