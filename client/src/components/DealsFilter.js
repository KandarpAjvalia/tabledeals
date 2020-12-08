import React, { useContext } from 'react'
import {
	Box, Text, Stack, CheckboxGroup, Checkbox, Select, useColorMode
} from '@chakra-ui/core'
import { useSearch } from '../hooks/search'
import { Context as UserContext } from '../context/UserContext'

const DealFilter = (props) => {
	const userContext = useContext(UserContext)
	const { isAuthenticated } = userContext.state

	const { colorMode } = useColorMode()
	const {
		dealTypeFilters,
		onDealTypeFilter,
		dealOptionFilters,
		onDealOptionFilter,
		foodOptionFilters,
		onFoodOptionFilter
	} = useSearch()

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Stack spacing={8} mb={8} {...props}>
			<Box>
				<Text mb={2} fontWeight="bold">
					Location
				</Text>
				<Select
					defaultValue="Newark, NJ"
					bg={colorMode === 'light' ? 'white' : 'gray.700'}
				>
					<option>Newark, NJ</option>
				</Select>
			</Box>
			<Box>
				<Text mb={2} fontWeight="bold">
					Deal Type
				</Text>
				<CheckboxGroup
					spacing={2}
					variantColor="orange"
					value={dealTypeFilters}
					onChange={onDealTypeFilter}
				>
					<Checkbox value="Drink">Drink</Checkbox>
					<Checkbox value="Food">Food</Checkbox>
				</CheckboxGroup>
			</Box>
			{isAuthenticated && (
				<Box>
					<Text mb={2} fontWeight="bold">
						Deals Option
					</Text>
					<CheckboxGroup
						spacing={2}
						variantColor="orange"
						value={dealOptionFilters}
						onChange={onDealOptionFilter}
					>
						<Checkbox value="Bookmarked">Bookmarked</Checkbox>
					</CheckboxGroup>
				</Box>
			)}
			{dealTypeFilters.includes('Food') && (
				<Box>
					<Text mb={2} fontWeight="bold">
						Food Option
					</Text>
					<CheckboxGroup
						spacing={2}
						variantColor="orange"
						value={foodOptionFilters}
						onChange={onFoodOptionFilter}
					>
						<Checkbox value="Vegetarian">Vegetarian</Checkbox>
					</CheckboxGroup>
				</Box>
			)}
		</Stack>
	)
}

export default DealFilter
