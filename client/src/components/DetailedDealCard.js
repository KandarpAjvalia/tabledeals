/* eslint-disable react/prop-types */
import React from 'react'
import {
	Box,
	Badge,
	Text,
	Flex,
	Stack,
	useColorMode
}
	from '@chakra-ui/core'
import AddVote from './AddVote'

const DetailedDealCard = ({
	dealId,
	title,
	dealType,
	resName,
	description,
	imageUrl,
	street,
	city,
	state,
	zip,
	openingTime,
	closingTime
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
								{openingTime}
								-
								{closingTime}
							</Text>
						</Stack>

					</Flex>
					<Flex>
						<Stack align="center" ml={2}>
							<AddVote
								dealId={dealId}
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
}

export default DetailedDealCard
