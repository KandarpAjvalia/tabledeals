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
		$dealId: uuid!
		$userId: uuid!
	) {
		user_deal(where: {
			deal_id: {_eq: $dealId}, 
			user_id: {_eq: $userId}
		}) {
			id
		}
	}
`
