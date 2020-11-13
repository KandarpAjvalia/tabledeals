import React, { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import Text from '@chakra-ui/core'
import PageWrapper from './PageWrapper'

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
	// const dealTitle = ({ dealId }) => {
	//  const { loading, error, data } = useQuery(GET_DEAL_BY_ID_QUERY, {
	// 		variables: { id : {id} },
	// 	})
		
	// 	console.log(data)
	// 	if (loading) return null
	// 	if (error) return `Error! ${error}`
	// 	return (
	// 	 <Text>{data.deal.title}</Text>
	// 	);
	// }

	return (
		<PageWrapper width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
			{id}
		</PageWrapper>
	)
}
export default DealInfo
