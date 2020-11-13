import React, {
	useState, useEffect, useContext
} from 'react'
import {
	Box, IconButton
} from '@chakra-ui/core'
import { Auth } from 'aws-amplify'
import { gql, useQuery, useMutation } from '@apollo/client'

import { Context as UserContext } from '../context/UserContext'
import { createApolloClient } from '../graphql/apollo'
import { GET_USER_DEAL_QUERY } from '../graphql/queries'
import { CREATE_USER_DEAL_MUTATION } from '../graphql/mutations'

const client = createApolloClient()

const AddVote = ({ dealId }) => {
	const userContext = useContext(UserContext)

	const [createUserDeal] = useMutation(CREATE_USER_DEAL_MUTATION)

	const onVote = async (vote) => {
		const { data } = await client.query({
			query: GET_USER_DEAL_QUERY,
			variables: {
				dealId,
				userId: userContext.state.user.sub
			},
			fetchPolicy: 'network-only'
		})

		console.log(data)

		if (data.user_deal.length) {
			const userDealPk = data.user_deal[0].id
			update(userDealPk, vote)
		} else {
			create(vote)
		}
	}

	const create = async (vote) => {
		console.log('create')

		const user = await Auth.currentAuthenticatedUser()
		const idToken = user.signInUserSession.idToken.jwtToken

		createUserDeal({
			variables: {
				dealId,
				vote
			},
			context: {
				headers: {
					Authorization: `Bearer ${idToken}`
				}
			}
		})
	}

	const update = (userDealPk, vote) => {
		console.log(userDealPk)
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
