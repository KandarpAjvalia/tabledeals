import React from 'react'
import {
	Box,
	Badge,
	Text,
	Flex,
	Stack,
	IconButton,
}
	from '@chakra-ui/core'

const DetailedDealCard = ({
	title,
	dealType,
	resName,
	description,
	image_url,
	street,
	city,
	state,
	zip,
	opening_time,
	closing_time
}) => (
	<Box
		borderWidth="1px"
		borderRadius={8}
		p={1}
		mb={2}
		backgroundColor="white"
		boxShadow="sm"
	>
		<Flex>
			<Stack ml={3} mt={2} mb={2} w="100%" pr={4}>
				<Flex align="center" justify="space-between">

					<Stack>
						<Text fontSize="xl" fontWeight="semibold" lineHeight="short">
							{resName}
						</Text>
						<Text fontSize="md" fontWeight="semibold" lineHeight="short">
							{description}
						</Text>
					</Stack>
					<Stack>
						<Text fontSize="xl" fontWeight="semibold" lineHeight="short">
							Open from:
						</Text>
						<Text>
							{opening_time}
							-
							{closing_time}
						</Text>
					</Stack>

				</Flex>
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
						</Flex>
					</Stack>
				</Flex>
				<Stack>
					<Text color="gray.400">
						{street}
					</Text>
					<Text color="gray.400">
						{city}
						{', '}
						{state}
						{' '}
						{zip}
					</Text>
				</Stack>

			</Stack>
		</Flex>
	</Box>
)

export default DetailedDealCard
