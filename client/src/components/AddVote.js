import React, {
	useContext,
	useState,
	useEffect
} from 'react'
import {
	Box, IconButton
} from '@chakra-ui/core'
import { Auth } from 'aws-amplify'
import { useMutation } from '@apollo/client'

import { Context as UserContext } from '../context/UserContext'
import { createApolloClient } from '../graphql/apollo'
import { GET_USER_DEAL_QUERY, SUM_USER_DEAL_VOTES_QUERY } from '../graphql/queries'
import { CREATE_USER_DEAL_MUTATION, UPDATE_USER_DEAL_MUTATION } from '../graphql/mutations'

const client = createApolloClient()

// eslint-disable-next-line react/prop-types
const AddVote = ({ dealId }) => {
	const userContext = useContext(UserContext)

	const [currentVote, setCurrentVote] = useState(0)
	const [sumVotes, setSumVotes] = useState(0)

	const refreshVotes = async () => {
		const { data } = await client.query({
			query: GET_USER_DEAL_QUERY,
			variables: {
				dealId,
				userId: userContext.state.user.sub
			},
			fetchPolicy: 'network-only'
		})

		if (data.user_deal.length) {
			setCurrentVote(data.user_deal[0].vote)
		}
	}

	const getInitialVotes = async () => {
		const { data } = await client.query({
			query: SUM_USER_DEAL_VOTES_QUERY,
			variables: {
				dealId
			}
		})
		const { vote } = data.user_deal_aggregate.aggregate.sum
		if (vote) {
			setSumVotes(vote)
		}
	}

	useEffect(() => {
		refreshVotes()
		getInitialVotes()
	}, [])

	const [createUserDeal] = useMutation(CREATE_USER_DEAL_MUTATION)
	const [updateUserDeal] = useMutation(UPDATE_USER_DEAL_MUTATION)

	const create = async (vote) => {
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

	const update = async (userDealPk, vote) => {
		const user = await Auth.currentAuthenticatedUser()
		const idToken = user.signInUserSession.idToken.jwtToken

		updateUserDeal({
			variables: {
				userDealPk,
				vote
			},
			context: {
				headers: {
					Authorization: `Bearer ${idToken}`
				}
			}
		})
	}

	const onVote = async (vote) => {
		const { data } = await client.query({
			query: GET_USER_DEAL_QUERY,
			variables: {
				dealId,
				userId: userContext.state.user.sub
			},
			fetchPolicy: 'network-only'
		})

		if (data.user_deal.length) {
			const userDealPk = data.user_deal[0].id
			update(userDealPk, vote)
		} else {
			create(vote)
		}
		setCurrentVote(vote)
		setSumVotes((prevSum) => {
			if (prevSum === 1) {
				return prevSum + (2 * vote)
			} if (prevSum === -1) {
				return prevSum + (2 * vote)
			}
			return prevSum + vote
		})
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
				disabled={currentVote === 1}
				_disabled={{ opacity: 1 }}
				color={currentVote === 1 ? 'orange.500' : 'gray.500'}
			/>
			<Box fontWeight="semibold">{sumVotes}</Box>
			<IconButton
				aria-label="Downvote"
				icon="chevron-down"
				size="sm"
				fontSize="20px"
				onClick={() => onVote(-1)}
				variant="ghost"
				disabled={currentVote === -1}
				_disabled={{ opacity: 1 }}
				color={currentVote === -1 ? 'orange.500' : 'gray.500'}
			/>
		</>
	)
}

export default AddVote
export { GET_USER_DEAL_QUERY }
