import React, {
	useContext,
	useEffect,
	useState,
} from 'react'
import { Auth } from 'aws-amplify'
import { IconButton, useColorMode } from '@chakra-ui/core'
import { useLazyQuery, useMutation } from '@apollo/client'
import { Context as UserContext } from '../context/UserContext'
import { GET_USER_DEAL_BOOKMARK_QUERY } from '../graphql/queries'
import { UPSERT_USER_DEAL_BOOKMARK_MUTATION } from '../graphql/mutations'

// eslint-disable-next-line react/prop-types
const AddBookmark = ({ dealId }) => {
	const { colorMode } = useColorMode()
	const userContext = useContext(UserContext)
	const userId = userContext.state.user && userContext.state.user.sub

	const [getUserBookmark, gqlUserDealExists] = useLazyQuery(GET_USER_DEAL_BOOKMARK_QUERY, {
		variables: {
			dealId,
			userId
		}
	})

	const [upsertUserDealBookmark] = useMutation(UPSERT_USER_DEAL_BOOKMARK_MUTATION)

	const [currentBookmark, setCurrentBookmark] = useState(false)

	const initalLoad = async () => {
		const user = await Auth.currentAuthenticatedUser()
		const { jwtToken } = user.signInUserSession.idToken
		getUserBookmark({
			context: {
				headers: {
					Authorization: `Bearer ${jwtToken}`
				}
			},
		})
	}

	useEffect(() => {
		initalLoad()
	}, [])
	useEffect(() => {
		if (gqlUserDealExists.data) {
			if (gqlUserDealExists.data.user_deal.length) {
				setCurrentBookmark(gqlUserDealExists.data.user_deal[0].isBookmarked)
			}
		}
	}, [gqlUserDealExists.data])

	const onBookmark = async () => {
		const previousBookmark = currentBookmark
		setCurrentBookmark(!currentBookmark)

		const upsertDealVariables = {
			id: userId + dealId,
			dealId,
			isBookmarked: !previousBookmark
		}

		const user = await Auth.currentAuthenticatedUser()

		const { jwtToken } = user.signInUserSession.idToken
		upsertUserDealBookmark({
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
				aria-label="Bookmark"
				icon="star"
				size="sm"
				fontSize="20px"
				onClick={() => onBookmark()}
				variant="ghost"
				color={(() => {
					if (currentBookmark) {
						return 'orange.500'
					}
					if (colorMode === 'dark') {
						return 'gray.500'
					}
					return 'gray.300'
				})()}
			/>
		</>
	)
}
export default AddBookmark
