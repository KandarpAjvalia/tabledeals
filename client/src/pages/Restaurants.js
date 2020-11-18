import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import RestaurantsPageWrapper from './RestaurantsPageWrapper'
import { GET_RESTAURANTS_ALL_INFO_QUERY } from '../graphql/queries'

const Restaurants = () => {
	const { data } = useQuery(GET_RESTAURANTS_ALL_INFO_QUERY)
	const [restaurants, setRestaurants] = useState([])

	useEffect(() => {
		if (data && data.restaurant) {
			setRestaurants(data.restaurant)
		}
	}, [data])
	return (
		<RestaurantsPageWrapper width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
			{restaurants && restaurants.map((restaurant) => (
				<h1>
					{restaurant.id}
					{restaurant.name}
					{restaurant.description}
				</h1>
			))}
		</RestaurantsPageWrapper>
	)
}
export default Restaurants
