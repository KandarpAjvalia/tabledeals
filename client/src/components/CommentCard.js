import React, {
	useState, useRef, useEffect, useContext
} from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { Context as UserContext } from '../context/UserContext'
import { Stack, Textarea, Text } from '@chakra-ui/core'
import Comment from './Comment';
import Auth from 'aws-amplify';
import { CREATE_COMMENT_MUTATION } from '../graphql/mutations'

const CommentCard = () => {
	const [createComment] = useMutation(CREATE_COMMENT_MUTATION)
	const userContext = useContext(UserContext)
	
    const onCreateComment = async ({
		comment
	}, onClose) => {
		const addCommentVariables = {comment}
		
  
  const user = await Auth.currentAuthenticatedUser()
  const idToken = user.signInUserSession.idToken.jwtToken
  
  createComment({
			variables: addCommentVariables,
			context: {
				headers: {
					Authorization: `Bearer ${idToken}`
				}
			}
		})

		onClose()
	}
  
  let [value, setValue] = React.useState("")
  
  let handleInputChange = (evt) => {
    let inputValue = evt.target.value
    setValue(inputValue)
  }
  
	

	
	return(
	<Stack>
		<Text fontSize="md" fontWeight="semibold" lineHeight="short">Comments</Text>
		<Text mb="8px">Value: {value}</Text>
        <Textarea isDisabled={!userContext.state.isAuthenticated} placeholder="Thoughts on this deal..." resize ="none" value={value} onChange={handleInputChange} size="sm"/>
		<Comment username="User1" commentText="Good Deal"/>
	</Stack>
)
}

export default CommentCard
