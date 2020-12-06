import React from 'react'
import {
	Box, Text, Stack, CheckboxGroup, Checkbox, Select, useColorMode
} from '@chakra-ui/core'
import { useSearch } from '../hooks/search'

const DealFilter = (props) => {
	const { colorMode } = useColorMode()
	const {
		dealTypeFilters,
		onDealTypeFilter,
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
