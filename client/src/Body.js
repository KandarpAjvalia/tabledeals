import React from 'react'

import { Heading, Text, Flex, Stack, Button} from '@chakra-ui/core'

function Body() {
	return (
		<Flex pt="50px" pb="25px" pl="500px" pr="500px" >
		<Stack spacing={3}>
			<Text fontSize="25px" textAlign='center' font="Verdana">An easy way to find the best deals around you so that you can save on food.</Text>
			<Text pb="300px"fontSize="20px" textAlign='center' font="Verdana">From chain restaurants to local businesses, TableDeals helps users find special discounts on food. </Text>
			<Button ml="200px" maxW="150px" variantColor="orange" size="lg" fontSize="xl">Get Started</Button>
		</Stack>
		</Flex>
		
	)
}

export default Body
