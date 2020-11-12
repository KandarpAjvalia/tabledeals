import React from 'react'
import {
	Box, Badge, Text, Flex, Stack, IconButton, Heading, Image
} from '@chakra-ui/core'

const RestaurantInfo = ({
	// eslint-disable-next-line react/prop-types
	name, description, image_url, street, city, state, zip, opening_time, closing_time
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
					<Text fontSize="xl" fontWeight="semibold" lineHeight="short">
					    {name}
					</Text>
					<Text fontSize="md" fontWeight="semibold" lineHeight="short">
					    {description}
					</Text>
					
				</Flex>
				<Flex align="center" justify="space-between">
				<Stack>
					<Text color="gray.400">
						{street}
					</Text>
					<Text color="gray.400">
						{city}, {state} {zip}
					</Text>
				</Stack>
				<Stack>
                    <Text fontSize="xl" fontWeight="semibold" lineHeight="short">
						Open from:
					</Text>
					<Text>{opening_time}-{closing_time}</Text>
				</Stack>
				</Flex>
			</Stack>
		</Flex>
	</Box>
)

export default RestaurantInfo
