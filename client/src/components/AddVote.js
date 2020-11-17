import React, {
	useContext,
	useState,
} from 'react'
import {
	Box, IconButton
} from '@chakra-ui/core'
import { Auth } from 'aws-amplify'
import { useMutation } from '@apollo/client'
import { Context as UserContext } from '../context/UserContext'
import { GET_USER_DEAL_QUERY } from '../graphql/queries'
import { UPSERT_USER_DEAL_MUTATION } from '../graphql/mutations'

// eslint-disable-next-line react/prop-types
const AddVote = ({ dealId }) => {
	const userContext = useContext(UserContext)

	const [currentVote, setCurrentVote] = useState(0)

	const { isAuthenticated } = userContext.state

	const [upsertUserDeal] = useMutation(UPSERT_USER_DEAL_MUTATION)

	const onVote = async (vote) => {
		let voteUpdate = vote
		if (vote === currentVote) {
			voteUpdate = 0
		}
		setCurrentVote(voteUpdate)
		const userId = userContext.state.user.sub

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
			<Box fontWeight="semibold">1</Box>
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
export { GET_USER_DEAL_QUERY }
