import React from 'react'
import {
	cleanup, render, fireEvent, waitFor
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider } from '@apollo/client/testing'
import 'babel-polyfill'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Context as UserContext } from '../context/UserContext'
import AddDeal from '../components/AddDeal'
import { GET_RESTAURANTS_QUERY } from '../graphql/queries'

afterEach(cleanup)

const mocks = [
	{
		request: {
			query: GET_RESTAURANTS_QUERY,
		},
		result: {
			data: {
				restaurant: [
					{
						id: '123',
						name: 'Jersey Tavern'
					}
				]
			}
		}
	}
]

it('AddDeal renders with restaurant list', async () => {
	const { getByTestId } = render(
		<ThemeProvider>
			<CSSReset />
			<UserContext.Provider
				value={{
					state: {
						isAuthenticated: true
					}
				}}
			>
				<MockedProvider mocks={mocks}>
					<AddDeal />
				</MockedProvider>
			</UserContext.Provider>
		</ThemeProvider>
	)
	await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))
	const addDealButton = getByTestId('addDeal')

	expect(addDealButton).not.toHaveFocus()
	fireEvent.click(addDealButton)
	expect(getByTestId('selectRestaurant')).toHaveTextContent('Jersey Tavern')
})
