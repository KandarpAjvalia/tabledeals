import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { Stack } from '@chakra-ui/core'
import PageWrapper from './DealsPageWrapper'
import DetailedDealCard from '../components/DetailedDealCard'
import CommentCard from '../components/CommentCard'
import { GET_DEAL_BY_ID_QUERY } from '../graphql/queries'

// eslint-disable-next-line react/prop-types
const DealInfo = ({ id }) => {
	const { loading, error, data } = useQuery(GET_DEAL_BY_ID_QUERY, {
		variables: { id },
	})

	const [deals, setDeals] = useState([])

	useEffect(() => {
		if (data && data.deal) {
			setDeals(data.deal)
		}
	}, [data])

	if (loading) return null
	if (error) return 'Error loading the details'

	return (
		<PageWrapper width="full" maxWidth="1280px" mx="auto" px={6} py={6} isDisabled>
			{deals && deals.map((deal) => {
				const {
					name, city, state, description, street, zip,
				} = deal.restaurant

				const imageUrl = deal.restaurant.image_url
				const openingTime = deal.restaurant.opening_time
				const closingTime = deal.restaurant.closing_time
				return (
					<Stack
						key={deal.id}
					>
						<DetailedDealCard
							key={deal.id}
							dealId={deal.id}
							title={deal.title}
							dealType={deal.type}
							dealDescription={deal.description}
							resName={name}
							city={city}
							state={state}
							description={description}
							imageUrl={imageUrl}
							street={street}
							zip={zip}
							openingTime={openingTime}
							closingTime={closingTime}
						/>
						<CommentCard dealId={deal.id} />
					</Stack>
				)
			})}
		</PageWrapper>
	)
}
export default DealInfo
