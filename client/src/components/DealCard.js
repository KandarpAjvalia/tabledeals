import React from 'react'
import {
	Box, Badge, Text, Flex, Stack, useColorMode, IconButton
} from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import AddVote from './AddVote'

const DealCard = ({
	// eslint-disable-next-line react/prop-types
	title, restaurantName, city, state, dealType, dealId
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
					<AddVote
						dealId={dealId}
					/>
				</Stack>
				<Stack ml={3} mt={2} mb={2} w="100%" pr={4}>
					<Flex align="baseline" justify="space-between">
						<Badge variantColor="orange">{dealType}</Badge>
						<IconButton
							aria-label="Upvote"
							icon="star"
							size="sm"
							fontSize="20px"
							variant="ghost"
							color="gray.400"
						/>
					</Flex>
					<Flex align="center" justify="space-between">
						<Link to={`/deal/${dealId}`}>
							<Text fontSize="xl" fontWeight="semibold" lineHeight="short">
								{title}
							</Text>
						</Link>
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
