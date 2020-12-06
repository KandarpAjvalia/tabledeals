import React, { useContext } from 'react'
import {
	Box, Badge, Text, Flex, Stack, useColorMode
} from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import { Context as UserContext } from '../context/UserContext'
import AddVote from './AddVote'
import AddBookmark from './AddBookmark'

const DealCard = ({
	// eslint-disable-next-line react/prop-types
	title, restaurantName, city, state, dealType, dealId, isVegetarian
}) => {
	const { colorMode } = useColorMode()
	const userContext = useContext(UserContext)
	const { isAuthenticated } = userContext.state

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
						{isAuthenticated && (
							<AddBookmark
								dealId={dealId}
							/>
						)}
// 					<Flex align="baseline">
// 						<Badge variantColor={dealType === 'Food' ? 'orange' : 'blue'} mr={2}>{dealType}</Badge>
// 						{(() => {
// 							if (dealType === 'Food') {
// 								if (isVegetarian) {
// 									return <Badge variantColor="green">Veg</Badge>
// 								}
// 							}
// 							return null
// 						})()}
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
