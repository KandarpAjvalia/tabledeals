import React, { useState, useEffect } from 'react'
import { SimpleGrid } from '@chakra-ui/core'
import { useQuery } from '@apollo/client'
import RestaurantsPageWrapper from './RestaurantsPageWrapper'
import RestaurantCard from '../components/RestaurantCard'
import { GET_RESTAURANTS_ALL_INFO_QUERY } from '../graphql/queries'

const Restaurants = () => {
	const { data } = useQuery(GET_RESTAURANTS_ALL_INFO_QUERY)
	const [restaurants, setRestaurants] = useState([])
	const [restaurantSearch, setRestaurantSearch] = useState('')

	useEffect(() => {
		if (data && data.restaurant) {
			setRestaurants(data.restaurant)
		}
	}, [data])

	const handleRestaurantSearch = (e) => {
		const searchTerm = e.target.value
		setRestaurantSearch(searchTerm)
		if (searchTerm === '') {
			setRestaurants(data.restaurant)
		} else {
			setRestaurants(data.restaurant.filter((restaurant) =>
				// eslint-disable-next-line implicit-arrow-linebreak
				restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
				|| restaurant.description.toLowerCase().includes(searchTerm.toLowerCase())
				|| restaurant.street.toLowerCase().includes(searchTerm.toLowerCase())))
		}
	}

	return (
		<RestaurantsPageWrapper
			width="full"
			maxWidth="1280px"
			mx="auto"
			px={6}
			py={6}
			restaurantSearch={restaurantSearch}
			handleRestaurantSearch={handleRestaurantSearch}
		>
			<SimpleGrid columns={3} spacing={5}>
				{restaurants && restaurants.map((restaurant) => (
					<RestaurantCard
						id={restaurant.id}
						name={restaurant.name}
						restaurantDescription={restaurant.description}
						image={restaurant.image_url}
						street={restaurant.street}
						city={restaurant.city}
						state={restaurant.state}
						openingTime={restaurant.opening_time}
						closingTime={restaurant.closing_time}
					/>
				))}
			</SimpleGrid>
		</RestaurantsPageWrapper>
	)
}
export default Restaurants
