import React, {
	useContext,
	useState,
	useEffect
} from 'react'
import { useQuery } from '@apollo/client'
import DealCard from '../components/DealCard'
import BookmarksPageWrapper from './BookmarksPageWrapper'
import { GET_BOOKMARKED_DEALS_QUERY } from '../graphql/queries'
import { Context as UserContext } from '../context/UserContext'

const Bookmarks = () => {
	const userContext = useContext(UserContext)
	const userId = userContext.state.user && userContext.state.user.sub
	const gqlBookmarkedDeals = useQuery(GET_BOOKMARKED_DEALS_QUERY, {
		variables: {
			userId
		}
	})
	const [deals, setDeals] = useState([])
	useEffect(() => {
		if (gqlBookmarkedDeals && gqlBookmarkedDeals.deal) {
			setDeals(gqlBookmarkedDeals.deal)
		}
	}, [gqlBookmarkedDeals])
	return (
		<BookmarksPageWrapper width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
			{deals && deals.map((deal) => {
				const { name, city, state } = deal.restaurant
				return (
					<DealCard
						key={deal.id}
						title={deal.title}
						dealType={deal.type}
						restaurantName={name}
						city={city}
						state={state}
						dealId={deal.id}
					/>
				)
			})}
		</BookmarksPageWrapper>
	)
}
export default Bookmarks
