import React from 'react'

import {
	Heading, Flex
} from '@chakra-ui/core'
import Login from './Login'

function Header() {
	return (
		<Flex pt="10px" pb="10px" bg="gray.100">

			<Heading as="h1" size="2xl" ml="50px">
				TableDeals
			</Heading>
			<Login />
		</Flex>
	)
}

export default Header
