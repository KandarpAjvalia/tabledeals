import React from 'react'
import {
	Box, Flex, Button
} from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import LoginButton from './LoginButton'
import ToggleColorButton from './ToggeColorButton'

const HomepageHeader = () => (
	<Box as="header" width="full" height="4rem">
		<Box width="full" mx="auto" px={6} pr={[1, 6]} height="100%">
			<Flex size="100%" p={[0, 6]} pl={[0, 4]} align="center" justify="space-between">
				<Box d="block" href="/" aria-label="tabledeals">
					<p w="100px">TableDeals</p>
				</Box>
				<Flex align="center">
					<LoginButton />
					<Link to="/deals">
						<Button variantColor="orange" m="2">Find Deals</Button>
					</Link>
					<ToggleColorButton />
				</Flex>
			</Flex>
		</Box>
	</Box>
)

export default HomepageHeader
