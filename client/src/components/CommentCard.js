import React from 'react'
import { Stack, Textarea, Text } from "@chakra-ui/core"
import Comment from './Comment'
const CommentCard = () => {
    

return (
    <Stack>
    	<Text fontSize="md" fontWeight="semibold" lineHeight="short">Comments</Text>
	    <Textarea placeholder="Thoughts on this deal..." />
	    <Comment username = "User1" commentText="Good Deal"/>
    </Stack>
    )
}
export default CommentCard