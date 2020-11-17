import React, {
	useContext,
	useEffect,
	useState,
} from 'react'
import {
	Box, IconButton
} from '@chakra-ui/core'
import { Auth } from 'aws-amplify'
import { useMutation, useQuery } from '@apollo/client'
import { Context as UserContext } from '../context/UserContext'
import { GET_USER_DEAL_QUERY, SUM_USER_DEAL_VOTES_QUERY } from '../graphql/queries'
import { UPSERT_USER_DEAL_MUTATION } from '../graphql/mutations'

// eslint-disable-next-line react/prop-types
const AddVote = ({ dealId }) => {
	const userContext = useContext(UserContext)
	const userId = userContext.state.user && userContext.state.user.sub
	const { isAuthenticated } = userContext.state

	const [currentVote, setCurrentVote] = useState(0)
	const [voteSum, setVoteSum] = useState(0)

	const gqlDealVotesSum = useQuery(SUM_USER_DEAL_VOTES_QUERY, {
		variables: {
			dealId
		}
	})
	const gqlUserDealExists = useQuery(GET_USER_DEAL_QUERY, {
		variables: {
			dealId,
			userId
		}
	})

	const [upsertUserDeal] = useMutation(UPSERT_USER_DEAL_MUTATION)

	useEffect(() => {
		if (gqlDealVotesSum.data) {
			const { vote } = gqlDealVotesSum.data.user_deal_aggregate.aggregate.sum
			if (vote) {
				setVoteSum(vote)
			}
		}

		if (gqlUserDealExists.data) {
			if (gqlUserDealExists.data.user_deal.length) {
				setCurrentVote(gqlUserDealExists.data.user_deal[0].vote)
			}
		}
	}, [gqlDealVotesSum.data, gqlUserDealExists.data])

	const onVote = async (vote) => {
		let voteUpdate = vote
		if (vote === currentVote) {
			voteUpdate = 0
		}
		const cacheUpdateSum = voteSum - currentVote + voteUpdate

		setCurrentVote(voteUpdate)
		const upsertDealVariables = {
			id: userId + dealId,
			dealId,
			vote: voteUpdate
		}

		const user = await Auth.currentAuthenticatedUser()

		const { jwtToken } = user.signInUserSession.idToken
		upsertUserDeal({
			variables: upsertDealVariables,
			context: {
				headers: {
					Authorization: `Bearer ${jwtToken}`
				}
			},
			update: (cache) => {
				const cachedData = cache.readQuery({
					query: SUM_USER_DEAL_VOTES_QUERY,
					variables: {
						dealId
					}
				})
				cache.writeQuery({
					query: SUM_USER_DEAL_VOTES_QUERY,
					variables: {
						dealId
					},
					data: {
						...cachedData,
						user_deal_aggregate: {
							aggregate: {
								sum: {
									vote: cacheUpdateSum
								}
							}
						}
					}
				})
				setVoteSum(cacheUpdateSum)
			}
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
				disabled={!isAuthenticated}
				_disabled={{ opacity: 1 }}
				color={currentVote === 1 ? 'orange.500' : 'gray.500'}
			/>
			<Box fontWeight="semibold">{voteSum}</Box>
			<IconButton
				aria-label="Downvote"
				icon="chevron-down"
				size="sm"
				fontSize="20px"
				onClick={() => onVote(-1)}
				variant="ghost"
				disabled={!isAuthenticated}
				_disabled={{ opacity: 1 }}
				color={currentVote === -1 ? 'orange.500' : 'gray.500'}
			/>
		</>
	)
}

export default AddVote
