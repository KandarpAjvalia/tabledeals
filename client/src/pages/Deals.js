import React, { useState, useEffect, useContext } from 'react'
import { Auth } from 'aws-amplify'
import { useLazyQuery } from '@apollo/client'
import { Box } from '@chakra-ui/core'
import DealCard from '../components/DealCard'
import { GET_DEALS_QUERY, GET_AUTH_DEALS_QUERY } from '../graphql/queries'
import PageWrapper from './DealsPageWrapper'
import { useSearch } from '../hooks/search'
import { Context as UserContext } from '../context/UserContext'

const Deals = () => {
	const userContext = useContext(UserContext)
	const { isAuthenticated } = userContext.state

	const [getDeals, getDealsQuery] = useLazyQuery(GET_DEALS_QUERY)
	const [getAuthDeals, getAuthDealsQuery] = useLazyQuery(GET_AUTH_DEALS_QUERY)

	const [deals, setDeals] = useState([])
	const [dealSearch, setDealSearch] = useState('')

	const { dealTypeFilters, foodOptionFilters, dealOptionFilters } = useSearch()

	const fetchAuthDeals = async () => {
		const userId = userContext.state.user.sub
		const user = await Auth.currentAuthenticatedUser()
		const { jwtToken } = user.signInUserSession.idToken
		getAuthDeals({
			variables: {
				userId
			},
			context: {
				headers: {
					Authorization: `Bearer ${jwtToken}`
				}
			}
		})
	}

	useEffect(() => {
		if (dealOptionFilters.includes('Bookmarked') && isAuthenticated) {
			fetchAuthDeals()
		} else {
			getDeals()
		}
	}, [isAuthenticated, dealOptionFilters])

	useEffect(() => {
		const { data } = getDealsQuery
		if (data && data.deal) {
			setDeals(data.deal)
		}
	}, [getDealsQuery])

	useEffect(() => {
		const { data } = getAuthDealsQuery
		if (data && data.deal) {
			setDeals(data.deal)
		}
	}, [getAuthDealsQuery])

	const handleDealSearch = (e) => {
		const searchTerm = e.target.value
		setDealSearch(searchTerm)
		if (searchTerm === '') {
			if (dealOptionFilters.includes('Bookmarked') && isAuthenticated) {
				setDeals(getAuthDealsQuery.data.deal)
			} else {
				setDeals(getDealsQuery.data.deal)
			}
		} else {
			let data = null
			if (dealOptionFilters.includes('Bookmarked') && isAuthenticated) {
				data = getAuthDealsQuery.data
			} else {
				data = getDealsQuery.data
			}
			setDeals(data.deal.filter((deal) =>
				// eslint-disable-next-line implicit-arrow-linebreak
				deal.title.toLowerCase().includes(searchTerm.toLowerCase())
				|| deal.description.toLowerCase().includes(searchTerm.toLowerCase())))
		}
	}

	const matchDealType = (deal) => dealTypeFilters.includes(deal.type)
	const matchFoodOption = (deal) => {
		if (foodOptionFilters.includes('Vegetarian')) {
			return deal.isVegetarian
		}
		return true
	}
	const matchDealOption = (deal) => {
		if (dealOptionFilters.includes('Bookmarked') && isAuthenticated) {
			if (deal.user_deals && deal.user_deals.length && deal.user_deals[0].isBookmarked) {
				return true
			}
			return false
		}
		return true
	}

	// console.log(deals.filter(matchDealType).filter(matchFoodOption).filter(matchDealOption))
	return (
		<PageWrapper
			width="full"
			maxWidth="1280px"
			mx="auto"
			px={6}
			py={6}
			dealSearch={dealSearch}
			handleDealSearch={handleDealSearch}
		>
			<Box width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
				{deals && deals.filter(matchDealType)
					.filter(matchFoodOption).filter(matchDealOption).map((deal) => {
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
								isVegetarian={deal.isVegetarian}
							/>
						)
					})}
			</Box>
		</PageWrapper>
	)
}
export default Deals
