import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { Box } from '@chakra-ui/core'
import DealCard from '../components/DealCard'
import { GET_DEALS_QUERY } from '../graphql/queries'
import PageWrapper from './DealsPageWrapper'

const Deals = () => {
	const { data } = useQuery(GET_DEALS_QUERY)
	const [deals, setDeals] = useState([])
	const [dealSearch, setDealSearch] = useState('')

	useEffect(() => {
		if (data && data.deal) {
			setDeals(data.deal)
		}
	}, [data])

	const handleDealSearch = (e) => {
		const searchTerm = e.target.value
		setDealSearch(searchTerm)
		if (searchTerm === '') {
			setDeals(data.deal)
		} else {
			setDeals(data.deal.filter((deal) =>
				// eslint-disable-next-line implicit-arrow-linebreak
				deal.title.toLowerCase().includes(searchTerm.toLowerCase())
				|| deal.description.toLowerCase().includes(searchTerm.toLowerCase())))
		}
	}

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
							isVegetarian={deal.isVegetarian}
						/>
					)
				})}
			</Box>
		</PageWrapper>
	)
}
export default Deals
