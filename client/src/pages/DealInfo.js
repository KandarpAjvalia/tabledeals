import React, { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import PageWrapper from './PageWrapper'
import DetailedDealCard from '../components/DetailedDealCard'

const DealInfo = ({ id }) => {
	const GET_DEAL_BY_ID_QUERY = gql`
	query findDeal($id: uuid!) {
    deal(where : {id: { _eq: $id } }
    ){
			title
			type
			restaurant {
				id
				name
				description
				image_url
				street
				city
				state
				zip
				opening_time
				closing_time
			}
    	}
	}
	
	`
	const dealInfo = ({ id }) => {
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
		if (error) return `Error! ${error}`

		return (
			<PageWrapper width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
				{deals && deals.map((deal) => {
					const {
						name, city, state, description, image_url, street, zip, opening_time, closing_time
					} = deal.restaurant
					return (
						<DetailedDealCard
							key={deal.id}
							title={deal.title}
							dealType={deal.type}
							resName={name}
							city={city}
							state={state}
							description={description}
							image_url={image_url}
							street={street}
							zip={zip}
							opening_time={opening_time}
							closing_time={closing_time}
						/>
					)
				})}
			</PageWrapper>
		)
	}

	return (
		<div>{dealInfo({ id })}</div>
	)
}
export default DealInfo
