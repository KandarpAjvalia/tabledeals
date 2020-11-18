import React from 'react'
import {
	Stack, Text, Box, Flex, useColorMode
} from '@chakra-ui/core'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const SideBarLink = ({ href, children, icon }) => (
	<Link to={href}>
		<Flex align="center" p={1}>
			<Box as={icon} mr={3} w="24px" />
			<Text fontWeight="bold">{children}</Text>
		</Flex>
	</Link>
)

const PageLinks = () => (
	<Stack spacing={0} mb={8}>
		<SideBarLink href="/">
			Home
		</SideBarLink>
		<SideBarLink href="/deals">
			Deals
		</SideBarLink>
		<SideBarLink href="/restaurants">
			Restaurants
		</SideBarLink>
	</Stack>
)

const RestaurantsSideBar = (props) => {
	const { colorMode } = useColorMode()

	return (
		<Box
			backgroundColor={colorMode === 'light' ? 'white' : 'gray.700'}
			position="fixed"
			left="0"
			width="100%"
			height="100%"
			top="0"
			right="0"
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}
		>
			<Box top="4rem" position="relative" overflowY="auto" borderRightWidth="1px">
				<Box>
					<Flex justify="space-between" direction="column" height="calc(100vh - 4rem)" fontSize="sm" p="6">
						<PageLinks />
					</Flex>
				</Box>
			</Box>
		</Box>
	)
}

export default RestaurantsSideBar
