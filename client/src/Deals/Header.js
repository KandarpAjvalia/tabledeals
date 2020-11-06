import React from 'react'

import {
	Heading, Flex, Input, Icon
} from '@chakra-ui/core'
import Logout from './Logout'
import { Avatar, AvatarBadge } from "@chakra-ui/core";
function Header() {
	return (
		<Flex  pt="10px" pb="10px" bg="gray.100" >
			<Heading as="h1" size="2xl" ml="50px">
				TableDeals
			</Heading>
			<Logout />
			<Avatar
                size="md"
                name="Kola Tioluwani"
                src="https://bit.ly/tioluwani-kolawole"
                pos="absolute" 
                right="15px"
                top="15px"
            />
		</Flex>
	)
}

export default Header
