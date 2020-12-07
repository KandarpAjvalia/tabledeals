import React from 'react'
import {
	Box, Image, useColorMode, Text, Badge, AspectRatioBox
} from '@chakra-ui/core'
import { formatTime } from '../utils'

const RestaurantCard = ({
	// eslint-disable-next-line react/prop-types
	name, restaurantDescription, image, street, city, state, zip, openingTime, closingTime
}) => {
	const { colorMode } = useColorMode()

	return (
		<Box maxW="sm" boxShadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden" bg={colorMode === 'light' ? 'white' : 'gray.700'}>
			<AspectRatioBox w="100%" maxWidth="400px" maxHeight="275px">
				<Image src={image} alt={name} objectFit="cover" />
			</AspectRatioBox>

			<Box p="3">
				<Box d="flex" alignItems="baseline">
					<Text fontSize="xl" fontWeight="semibold" lineHeight="short">
						{name}
					</Text>
				</Box>
				<Badge variantColor="orange">
					{restaurantDescription}
				</Badge>
				<Box>
					<Text
						fontSize="s"
						fontWeight="normal"
						lineHeight="short"
						color={colorMode === 'light' ? 'gray.700' : 'gray.400'}
					>
						{`${formatTime(openingTime)} - ${formatTime(closingTime)}`}
					</Text>
				</Box>
				<Box>
					<Text>
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
