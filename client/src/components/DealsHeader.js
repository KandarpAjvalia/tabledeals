import React, { useContext } from 'react'
import {
	Box, Flex, InputGroup, InputLeftElement, Input, Icon
} from '@chakra-ui/core'
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'
import { Context as UserContext } from '../context/UserContext'

const Header = () => {
	const userContext = useContext(UserContext)

	return (
		<Box
			pos="fixed"
			as="header"
			top="0"
			zIndex="4"
			bg="white"
			left="0"
			right="0"
			borderBottomWidth="1px"
			width="full"
			height="4rem"
		>
			<Box width="full" mx="auto" px={6} pr={[1, 6]} height="100%">
				<Flex size="100%" p={[0, 6]} pl={[0, 4]} align="center" justify="space-between">
					<Box as="a" d="block" href="/" aria-label="TableDeals">
						TableDeals
					</Box>
					<InputGroup display={['none', null, 'block']} width="100%" ml={16} mr={16}>
						<InputLeftElement>
							<Icon name="search" color="gray.500" />
						</InputLeftElement>
						<Input
							type="text"
							placeholder="Search for deals"
							bg="gray.100"
						/>
					</InputGroup>
					{userContext.state.isAuthenticated ? <LogoutButton /> : <LoginButton /> }
				</Flex>
			</Box>
		</Box>
	)
}
export default Header
