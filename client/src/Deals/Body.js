import React from 'react'

import {
	Text, Flex, Stack, Button
} from '@chakra-ui/core'
import Deal from './Deal'

const Body = () => (
	<Flex mt="50px" pt="10px" pb="25px" pl="400px" pr="500px" position="absolute">
		<Stack spacing={10}>
			<Deal />
			<Deal />
			<Deal />
		</Stack>
	</Flex>

)

export default Body
