import React, { useState, useEffect } from 'react'
import {
	Box, Flex, InputGroup, InputLeftElement, Input, Icon, FormControl, FormLabel, FormErrorMessage, FormHelperText, Link
} from '@chakra-ui/core'
import { gql, useQuery } from '@apollo/client'
import Autosuggest from 'react-autosuggest'
import { GET_RESTAURANTS_QUERY, GET_DEALS_QUERY } from '../graphql/queries'
import DealSuggestion from './DealSuggestion'
import LogoutButton from './LogoutButton'
import Searchbar from './Searchbar'

const Header = () => (
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
				<LogoutButton />
			</Flex>
		</Box>
	</Box>
)
export default Header
