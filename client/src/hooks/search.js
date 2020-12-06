import React, { useState, useContext, createContext } from 'react'

const searchContext = createContext()

const useSearchProvider = () => {
	const [dealTypeFilters, setDealTypeFilters] = useState(['Food', 'Drink'])

	const [foodOptionFilters, setFoodOptionFilters] = useState([])

	const onDealTypeFilter = (newValues) => {
		setDealTypeFilters(newValues)
	}

	const onFoodOptionFilter = (newValues) => {
		setFoodOptionFilters(newValues)
	}

	return {
		dealTypeFilters,
		onDealTypeFilter,
		foodOptionFilters,
		onFoodOptionFilter
	}
}

// eslint-disable-next-line react/prop-types
export const SearchProvider = ({ children }) => {
	const search = useSearchProvider()
	return <searchContext.Provider value={search}>{children}</searchContext.Provider>
}

export const useSearch = () => useContext(searchContext)
