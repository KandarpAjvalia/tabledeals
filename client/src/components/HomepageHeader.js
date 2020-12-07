import React, { useContext } from 'react'
import {
	Box, Flex, Button, Text
} from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import { Context as UserContext } from '../context/UserContext'
import LoginButton from './LoginButton'
import ToggleColorButton from './ToggeColorButton'

const HomepageHeader = () => {
	const userContext = useContext(UserContext)

	const { isAuthenticated } = userContext.state

	return (
		<Box as="header" width="full" height="4rem">
			<Box width="full" mx="auto" px={6} pr={[1, 6]} height="100%">
				<Flex size="100%" p={[0, 6]} pl={[0, 4]} align="center" justify="space-between">
					<Box d="block" href="/" aria-label="tabledeals">
						<p w="100px">TableDeals</p>
					</Box>
					<Flex align="center">
						{isAuthenticated ? (
							<Text m={4}>
								{`Hello, ${userContext.state.user && userContext.state.user.name}`}
							</Text>
						) : (
							<LoginButton />
						)}
						<Link to="/deals">
							<Button variantColor="orange" m="2">Find Deals</Button>
						</Link>
						<ToggleColorButton />
					</Flex>
				</Flex>
			</Box>
		</Box>
	)
}

export default HomepageHeader
