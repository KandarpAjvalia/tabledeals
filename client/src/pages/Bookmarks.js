import React, {
	useContext,
	useState,
	useEffect
} from 'react'
import { useQuery } from '@apollo/client'
import DealCard from '../components/DealCard'
import BookmarksPageWrapper from './BookmarksPageWrapper'
import { GET_BOOKMARKED_USER_DEALS_QUERY } from '../graphql/queries'
import { Context as UserContext } from '../context/UserContext'

const Bookmarks = () => {
	const userContext = useContext(UserContext)
	const userId = userContext.state.user && userContext.state.user.sub
	const gqlBookmarkedUserDeal = useQuery(GET_BOOKMARKED_USER_DEALS_QUERY, {
		variables: {
			userId
		}
	})
	const [deals, setDeals] = useState(0)

	useEffect(() => {
		if (1 === 1) {
			setDeals(1)
		}
	}, [gqlBookmarkedUserDeal.data])
	return (
		<BookmarksPageWrapper width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
			{deals}
		</BookmarksPageWrapper>
	)
}
export default Bookmarks
