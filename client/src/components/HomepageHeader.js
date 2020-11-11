import React from 'react'
import {
	Box, Flex, Button, useDisclosure
} from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import Login from './Login'

const HomepageHeader = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<Box as="header" width="full" height="4rem">
			<Box width="full" mx="auto" px={6} pr={[1, 6]} height="100%">
				<Flex size="100%" p={[0, 6]} pl={[0, 4]} align="center" justify="space-between">
					<Box d="block" href="/" aria-label="tabledeals">
						<p w="100px">TableDeals</p>
					</Box>
					<Flex align="center">
						<Button variant="ghost" onClick={onOpen}>
							Sign In
						</Button>
						<Link to="/deals">
							<Button variantColor="orange">Find Deals</Button>
						</Link>
					</Flex>
				</Flex>
			</Box>
			<Login isOpen={isOpen} onClose={onClose} />

		</Box>
	)
}

export default HomepageHeader
