import React, { useState, useContext, createContext } from 'react'

const searchContext = createContext()

const useSearchProvider = () => {
	const [dealTypeFilters, setDealTypeFilters] = useState(['Food', 'Drink'])

	const onDealTypeFilter = (newValues) => {
		setDealTypeFilters(newValues)
	}

	return {
		dealTypeFilters,
		onDealTypeFilter
	}
}

// eslint-disable-next-line react/prop-types
export const SearchProvider = ({ children }) => {
	const search = useSearchProvider()
	return <searchContext.Provider value={search}>{children}</searchContext.Provider>
}

export const useSearch = () => useContext(searchContext)
