import React from 'react'
import {
	Stack, Box, Button, Text, Heading, Checkbox
} from '@chakra-ui/core'

const Sidebar = () => {
	return (
		<Box maxW="250px" boxShadow="xl" bg="blue.300">
			<Stack spacing={2} bg="blue.300" pt="50px">
				<Button textAlign="left" bg="blue.300" color="white">
					<Heading as="h2" fontSize="18px">
						Home
					</Heading>
				</Button>
				<Button textAlign="left" bg="blue.300" color="white">
					<Heading as="h2" fontSize="18px">
						Deals
					</Heading>
				</Button>
				<Button textAlign="left" bg="blue.300" color="white">
					<Heading as="h2" fontSize="18px">
						Home
						Restaurants
					</Heading>
				</Button>
				<Button bg="blue.300" color="white">
					<Heading as="h2" fontSize="18px">
						Map
					</Heading>
				</Button>
			</Stack>
			<Heading as="h2" fontSize="18px" mt="100px" color="white" ml="10px">Filter</Heading>
			<Stack spacing={2} bg="blue.300" ml="20px" pb="500px">
				<Checkbox ml="5px" mt="10px">Restaurants</Checkbox>
				<Checkbox ml="5px">Bars</Checkbox>
			</Stack>
		</Box>
	)
}

export default Sidebar
