import React from 'react'

import {
	Heading, Flex, Input, Icon,
	Avatar, AvatarBadge
} from '@chakra-ui/core'
import Logout from './Logout'

function Header() {
	return (
		<Flex pt="10px" pb="10px" bg="gray.300" boxShadow="xl">
			<Heading as="h1" size="2xl" ml="50px">
				TableDeals
			</Heading>
		</Flex>
	)
}

export default Header
