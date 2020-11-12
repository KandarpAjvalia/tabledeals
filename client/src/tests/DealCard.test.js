import React from 'react'
import { cleanup, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import DealCard from '../components/DealCard'

afterEach(cleanup)

it('DealCard renders with data', () => {
	const { getByTestId } = render(
		<ThemeProvider>
			<CSSReset />
			<DealCard
				title="Free drink"
				dealType="Drink"
				restaurantName="Hoboken Bar"
				city="Hoboken"
				state="NJ"
			/>
		</ThemeProvider>
	)
	expect(getByTestId('dealCard')).toHaveTextContent('Hoboken')
})
