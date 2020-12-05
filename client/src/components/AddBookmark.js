import React, {
	useContext,
	useEffect,
	useState,
} from 'react'
import { Auth } from 'aws-amplify'
import { IconButton } from '@chakra-ui/core'
import { useLazyQuery } from '@apollo/client'
import { Context as UserContext } from '../context/UserContext'
import { GET_USER_DEAL_BOOKMARK_QUERY } from '../graphql/queries'

// eslint-disable-next-line react/prop-types
const AddBookmark = ({ dealId }) => {
	const userContext = useContext(UserContext)
	const userId = userContext.state.user && userContext.state.user.sub

	const [getUserBookmark, gqlUserDealExists] = useLazyQuery(GET_USER_DEAL_BOOKMARK_QUERY, {
		variables: {
			dealId,
			userId
		}
	})

	const [currentBookmark, setCurrentBookmark] = useState(false)
	useEffect(async () => {
		const user = await Auth.currentAuthenticatedUser()
		const { jwtToken } = user.signInUserSession.idToken
		getUserBookmark({
			context: {
				headers: {
					Authorization: `Bearer ${jwtToken}`
				}
			},
		})
	}, [])
	useEffect(() => {
		if (gqlUserDealExists.data) {
			if (gqlUserDealExists.data.user_deal.length) {
				setCurrentBookmark(gqlUserDealExists.data.user_deal[0].isBookmarked)
			}
		}
	}, [gqlUserDealExists.data])

	const onBookmark = () => {
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
				color={currentBookmark ? 'orange.500' : 'gray.500'}
			/>
		</>
	)
}
export default AddBookmark
