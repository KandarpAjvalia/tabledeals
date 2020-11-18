import React from 'react'
import {
	Box, Image, useColorMode, Text, Badge, AspectRatioBox
} from '@chakra-ui/core'

const RestaurantCard = ({
	// eslint-disable-next-line react/prop-types
	name, restaurantDescription, image, street, city, state, zip, openingTime, closingTime
}) => {
	const { colorMode } = useColorMode()

	return (
		<Box maxW="sm" boxShadow="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bg={colorMode === 'light' ? 'white' : 'gray.700'}>
			<AspectRatioBox w="100%" maxWidth="400px" maxHeight="275px">
				<Image src={image} alt={name} objectFit="cover" />
			</AspectRatioBox>

			<Box p="6">
				<Box d="flex" alignItems="baseline">
					<Text fontSize="xl" fontWeight="semibold" lineHeight="short">
						{name}
					</Text>
				</Box>
				<Badge variantColor="orange">
					{restaurantDescription}
				</Badge>
				<Box>
					<Text> </Text>
					<Text fontSize="s" fontWeight="normal" lineHeight="short" color="gray.700">
						Open:
						{' '}
						{openingTime}
						{' - '}
						{closingTime}
					</Text>
				</Box>
				<Box>
					<Text color="gray.600">
						{street}
						{' '}
						{city}
						{', '}
						{state}
						{' '}
						{zip}
					</Text>
				</Box>
			</Box>
		</Box>
	)
}

export default RestaurantCard
