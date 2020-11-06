import React from 'react'

import {
	Heading, Link, Text, Button, Box, Flex
} from '@chakra-ui/core'
import Login from './Login'

function Header() {
	return (
		<Flex align="center" justify="center" alignItems="center" pt="25px" pb="25px" bg="gray.100">

			<Heading as="h1" size="2xl">
				TableDeals
			</Heading>
			<Login pb="25px"/>
		</Flex>
	)
}

export default Header
