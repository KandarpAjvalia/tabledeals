import React from 'react'
import PageWrapper from './PageWrapper'
import DealCard from '../components/DealCard'

const Deals = () => (
	<PageWrapper width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
		<DealCard />
		<DealCard />
		<DealCard />
		<DealCard />
	</PageWrapper>
)
export default Deals
