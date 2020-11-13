import React, { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import PageWrapper from './PageWrapper'
const DealInfo = ({ id }) => {
	const GET_DEAL_BY_ID_QUERY = gql`
	query findDeal($id: String) {
    deal(id: $id) { id
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
	const { data } = useQuery(GET_DEAL_BY_ID_QUERY, {
		variables: { id: { id } },
	})
	console.log(`DATA${{ data }[0]}`)

	return (
		<PageWrapper width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
			{id}

		</PageWrapper>
	)
}
export default DealInfo
