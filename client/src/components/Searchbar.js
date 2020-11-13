import Autosuggest from 'react-autosuggest'
import React, { useState, useEffect } from 'react'
import {
	Box, Flex, InputGroup, InputLeftElement, Input, Icon, FormControl, FormLabel, FormErrorMessage, FormHelperText, Link
} from '@chakra-ui/core'
import { gql, useQuery } from '@apollo/client'
import { GET_RESTAURANTS_QUERY, GET_DEALS_QUERY } from '../graphql/queries'
import DealSuggestion from './DealSuggestion'
import LogoutButton from './LogoutButton'

const Searchbar = () => {
	const { data } = useQuery(GET_DEALS_QUERY)
	const [deals, setDeals] = useState([])

	useEffect(() => {
		if (data && data.deal) {
			setDeals(data.deal)
		}
	}, [data])
	console.log(deals)
	const languages = [
		{
			name: 'C',
			year: 1972
		},
		{
			name: 'Elm',
			year: 2012
		}
	]
	// Teach Autosuggest how to calculate suggestions for any given input value.
	const getSuggestions = (value) => {
		const inputValue = value.trim().toLowerCase()
		const inputLength = inputValue.length

		return inputLength === 0 ? [] : languages.filter((lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue)
	}

	// When suggestion is clicked, Autosuggest needs to populate the input
	// based on the clicked suggestion. Teach Autosuggest how to calculate the
	// input value for every given suggestion.
	const getSuggestionValue = (suggestion) => suggestion.name

	// Use your imagination to render suggestions.
	const renderSuggestion = (suggestion) => (
		<div>
			{suggestion.name}
		</div>
	)

	const [value, setValue] = useState('')
	const [suggestions, setSuggestions] = useState([])

	const onChange = (event, { newValue }) => {
		setValue(newValue)
	}

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	const onSuggestionsFetchRequested = ({ value }) => {
		setSuggestions(suggestions[value])
	}

	// Autosuggest will call this function every time you need to clear suggestions.
	const onSuggestionsClearRequested = () => {
		setSuggestions([])
	}

	// Autosuggest will pass through all these props to the input.
	const inputProps = {
		placeholder: 'Type a programming language',
		value,
		onChange: this.onChange
	}

	// Finally, render it!
	return (
		<div>hello</div>
	)
}
