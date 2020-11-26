import React from 'react'
import {
	cleanup, render, act
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider } from '@apollo/client/testing'
import 'babel-polyfill'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Context as UserContext } from '../context/UserContext'
import AddVote from '../components/AddVote'
import { GET_USER_DEAL_QUERY, SUM_USER_DEAL_VOTES_QUERY } from '../graphql/queries'

afterEach(cleanup)

const dealId = '744ff7fb-0d4f-484a-a70a-47a36412756d'
const userId = '5bd8747b-256c-44c7-9ea5-a60c05bc8c42'

const mocks = [
	{
		request: {
			query: GET_USER_DEAL_QUERY,
			variables: {
				dealId,
				userId
			}
		},
		result: {
			data: {
				user_deal: [
					{
						id: 'be03d5ed-7d9a-48e1-bdc7-6f0165669c41',
						vote: 1011
					}
				]
			}
		}
	},
	{
		request: {
			query: SUM_USER_DEAL_VOTES_QUERY,
			variables: {
				dealId
			}
		},
		result: {
			data: {
				user_deal_aggregate: {
					aggregate: {
						sum: {
							vote: 48
						}
					}
				}
			}
		}
	}
]

it('Add Vote renders vote sum', async () => {
	const { getByTestId } = render(
		<ThemeProvider>
			<CSSReset />
			<UserContext.Provider
				value={{
					state: {
						isAuthenticated: true,
						user: {
							sub: userId
						}
					}
				}}
			>
				<MockedProvider mocks={mocks}>
					<AddVote dealId={dealId} />
				</MockedProvider>
			</UserContext.Provider>
		</ThemeProvider>
	)

	await act(() => new Promise((resolve) => setTimeout(resolve, 0)))

	expect(getByTestId('dealVoteSum')).toHaveTextContent('48')
})
