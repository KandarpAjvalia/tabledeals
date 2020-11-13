/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client'

export const GET_DEALS_QUERY = gql`
    query getDeals {
		deal {
			id
			title
			type
			restaurant {
				name
				city
				state
			}
			
		}
	}
`

export const GET_RESTAURANTS_QUERY = gql`
	query getRestaurants {
		restaurant {
			id
			name
		}
	}
`

export const GET_USER_DEAL_QUERY = gql`
	query getUserDeal(
		$userId: uuid!
		$dealId: uuid!
	) {
		user_deal(
			where: {
			_and: {
				user_id: {
				_eq: $userId
				}, 
				deal_id: {
				_eq: $dealId
				}
			}
			}
		) {
			id
		}
	}

`
