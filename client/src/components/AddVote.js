import React from 'react'
import {
	Box, IconButton
} from '@chakra-ui/core'
import { Auth } from 'aws-amplify'

const AddVote = (deal_id) => {
    const onCreateDeal = async () => {

		const user = await Auth.currentAuthenticatedUser()
        const idToken = user.signInUserSession.idToken.jwtToken
        
        console.log(user["attributes"]["sub"])
    }
    return (
	    <>
		    <IconButton
			    aria-label="Upvote"
			    icon="chevron-up"
			    size="sm"
			    fontSize="20px"
			    onClick={() => console.log(deal_id["deal_id"])}
			    variant="ghost"
			    color="gray.500"
		    />
		    <Box fontWeight="semibold">7</Box>
		    <IconButton
			    aria-label="Downvote"
			    icon="chevron-down"
			    size="sm"
			    fontSize="20px"
			    onClick={() => onCreateDeal()}
			    variant="ghost"
			    color="gray.500"
		    />
	    </>
    )
}

export default AddVote