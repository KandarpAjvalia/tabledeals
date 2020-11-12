import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import PageWrapper from './PageWrapper'
import RestaurantInfo from '../components/RestaurantInfo'
import { GET_RESTAURANTS_QUERY } from '../graphql/queries'

const DetailedDeal = () => {
	const { data } = useQuery(GET_RESTAURANTS_QUERY)
	const [restaurants, setRestaurants] = useState([])

	useEffect(() => {
		if (data && data.restaurant) {
			setRestaurants(data.restaurant)
		}
	}, [data])
    console.log(restaurants)
	return (
		<PageWrapper width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
				{restaurants && restaurants.map((restaurant) => {
				return (
				<RestaurantInfo
						key={restaurant.id}
						name={restaurant.name}
						description={restaurant.description}
						restaurantName={restaurant.name}
						image_url={restaurant.image_url}
						street={restaurant.street}
						city={restaurant.city}
				    	state={restaurant.state}
				    	zip={restaurant.zip}
				    	opening_time={restaurant.opening_time}	
				   	    closing_time={restaurant.closing_time} 	
					/>
					)
			})}
		</PageWrapper>
	)
}
export default DetailedDeal
