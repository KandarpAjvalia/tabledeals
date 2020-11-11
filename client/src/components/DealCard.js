import React from 'react'
import {
	Box, Badge, Text, Flex, Stack, IconButton
} from '@chakra-ui/core'

// eslint-disable-next-line react/prop-types
const DealCard = ({ title }) => (
	<Box
		borderWidth="1px"
		borderRadius={8}
		p={1}
		mb={2}
		backgroundColor="white"
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
					<Badge variantColor="orange">Food</Badge>
				</Flex>
				<Flex align="center" justify="space-between">
					<Text fontSize="xl" fontWeight="semibold" lineHeight="short">
						{title}
					</Text>
					{/* <Badge variantColor="grey">7pm - 10pm</Badge> */}
				</Flex>
				<Flex align="center" justify="space-between">
					<Text color="gray.400">New York, NY</Text>
					<Text>NY Tavern</Text>
				</Flex>
			</Stack>
		</Flex>
	</Box>
)

export default DealCard
