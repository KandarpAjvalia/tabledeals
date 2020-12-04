/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Box, useColorMode } from '@chakra-ui/core'
import RestaurantsHeader from '../components/RestaurantsHeader'
import RestaurantsSideBar from '../components/RestaurantsSideBar'

const RestaurantsPageWrapper = ({
	// eslint-disable-next-line react/prop-types
	children, restaurantSearch, handleRestaurantSearch, isDisabled = false, ...rest
}) => {
	const { colorMode } = useColorMode()

	return (
		<>
			<RestaurantsHeader
				restaurantSearch={restaurantSearch}
				handleRestaurantSearch={handleRestaurantSearch}
				isDisabled={isDisabled}
			/>
			<Box>
				<RestaurantsSideBar maxWidth="18rem" width="full" />
				<Box pl={[0, null, '18rem']} mt="4rem">
					<Box
						as="section"
						bg={colorMode === 'light' ? 'white' : 'gray.800'}
						minHeight="calc(100vh - 4rem)"
						p="1rem"
					>
						<Box {...rest}>{children}</Box>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default RestaurantsPageWrapper
