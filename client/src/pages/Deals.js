import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { Box, useColorMode } from '@chakra-ui/core'
import DealCard from '../components/DealCard'
import { GET_DEALS_QUERY } from '../graphql/queries'
import DealsHeader from '../components/DealsHeader'
import DealSideBar from '../components/DealsSideBar'

const Deals = () => {
	const colorMode = useColorMode()
	const { data } = useQuery(GET_DEALS_QUERY)
	const [deals, setDeals] = useState([])
	const [dealSearch, setDealSearch] = useState('')

	useEffect(() => {
		if (data && data.deal) {
			setDeals(data.deal)
		}
	}, [data])

	const handleDealSearch = e => {
		const searchTerm = e.target.value
		setDealSearch(searchTerm)
		if (searchTerm === '') {
			setDeals(data.deal)
		} else {
			setDeals((prevDeals) => prevDeals.filter((deal) =>
				// eslint-disable-next-line implicit-arrow-linebreak
				deal.title.toLowerCase().includes(searchTerm.toLowerCase())
				|| deal.description.toLowerCase().includes(searchTerm.toLowerCase())))
		}
	}

	return (
		<>
			<DealsHeader dealSearch={dealSearch} handleDealSearch={handleDealSearch} />
			<Box>
				<DealSideBar maxWidth="18rem" width="full" />
				<Box pl={[0, null, '18rem']} mt="4rem">
					<Box
						as="section"
						bg={colorMode === 'light' ? 'white' : 'gray.800'}
						minHeight="calc(100vh - 4rem)"
						p="1rem"
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
									/>
								)
							})}
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	)
}
export default Deals
