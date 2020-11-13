import React, {
	useState, useEffect, useContext
} from 'react'
import {
	Box, IconButton
} from '@chakra-ui/core'
import { Auth } from 'aws-amplify'
import { gql } from '@apollo/client'
import { useQuery, useMutation } from '@apollo/client'
import { Context as UserContext } from '../context/UserContext'
import { GET_USER_DEAL_QUERY } from '../graphql/queries'

const AddVote = ({ dealId }) => {

	const userContext = useContext(UserContext)
	
	const { data } = useQuery(GET_USER_DEAL_QUERY, {
		variables: { 
			dealId, 
			userId: userContext.state.user.sub
		},
	})

	const onVote = async (vote) => {
		console.log(vote)

		if (data.user_deal.length) {
			update()
		} else {
			create()
		}
	}

	const create = () => {
		console.log('create')
	}

	const update = () => {
		console.log('update')
	}

    return (
	    <>
		    <IconButton
			    aria-label="Upvote"
			    icon="chevron-up"
			    size="sm"
				fontSize="20px"
			    onClick={() => onVote(1)}
			    variant="ghost"
			    color="gray.500"
		    />
		    <Box fontWeight="semibold">7</Box>
		    <IconButton
			    aria-label="Downvote"
			    icon="chevron-down"
			    size="sm"
			    fontSize="20px"
			    onClick={() => onVote(-1)}
			    variant="ghost"
			    color="gray.500"
		    />
	    </>
    )
}

export default AddVote
export { GET_USER_DEAL_QUERY }