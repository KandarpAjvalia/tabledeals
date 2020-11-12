import React from 'react'
import {
	Box, Badge, Text, Flex, Stack, IconButton, useColorMode
} from '@chakra-ui/core'

const DealCard = ({
	// eslint-disable-next-line react/prop-types
	title, restaurantName, city, state, dealType
}) => {
	const { colorMode } = useColorMode()

	return (
		<Box
			borderWidth="1px"
			borderRadius={8}
			p={1}
			mb={2}
			bg={colorMode === 'light' ? 'white' : 'gray.700'}
			boxShadow="sm"
		>
			<Flex>
				<Stack align="center" ml={2}>
					<IconButton
						aria-label="Upvote"
						icon="chevron-up"
						size="sm"
						fontSize="20px"
						onClick={() => console.log('upvote')}
						variant="ghost"
						color="gray.500"
					/>
					<Box fontWeight="semibold">7</Box>
					<IconButton
						aria-label="Downvote"
						icon="chevron-down"
						size="sm"
						fontSize="20px"
						onClick={() => console.log('downvote')}
						variant="ghost"
						color="gray.500"
					/>
				</Stack>
				<Stack ml={3} mt={2} mb={2} w="100%" pr={4}>
					<Flex align="baseline">
						<Badge variantColor="orange">{dealType}</Badge>
					</Flex>
					<Flex align="center" justify="space-between">
						<Text fontSize="xl" fontWeight="semibold" lineHeight="short">
							{title}
						</Text>
						{/* <Badge variantColor="grey">7pm - 10pm</Badge> */}
					</Flex>
					<Flex align="center" justify="space-between">
						<Text color="gray.400">
							{city}
							,
							{state}
						</Text>
						<Text>{restaurantName}</Text>
					</Flex>
				</Stack>
			</Flex>
		</Box>
	)
}

export default DealCard
