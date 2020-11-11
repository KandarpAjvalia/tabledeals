import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import PageWrapper from './PageWrapper'
import DealCard from '../components/DealCard'
import { GET_DEALS_QUERY } from '../graphql/queries'

const Deals = () => {
	const { data } = useQuery(GET_DEALS_QUERY)
	const [deals, setDeals] = useState([])
	useEffect(() => {
		if (data && data.deal) {
			setDeals(data.deal)
		}
	}, [data])
	console.log(deals)
	return (
		<PageWrapper width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
			{deals && deals.map((deal) => (
				<DealCard key={deal.id} title={deal.title} />
			))}
		</PageWrapper>
	)
}
export default Deals
