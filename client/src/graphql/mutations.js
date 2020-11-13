import { gql } from '@apollo/client'

// eslint-disable-next-line import/prefer-default-export
export const CREATE_DEAL_MUTATION = gql`
	mutation createDeal(
		$title: String!
		$description: String!
		$dealType: String!
		$restaurantId: uuid!
	) {
		insert_deal_one(object: {
			title: $title
			description: $description
			type: $dealType
			restaurant_id: $restaurantId
		}) {
			id
		}
	}
`
export const CREATE_USER_DEAL_MUTATION = gql`
	mutation createUserDeal(
		$dealId: uuid!
		$vote: Int!
	) {
		insert_user_deal_one(
			object: {
			deal_id: $dealId, 
			vote: $vote
			}
		) {
			id
		}
	}

`

export const UPDATE_USER_DEAL_MUTATION = gql`
	mutation updateUserDeal(
		$userDealPk: uuid!, 
		$vote: Int!
	) {
		update_user_deal_by_pk(
			pk_columns: {
				id: $userDealPk
			}, 
			_set: {
				vote: $vote
			}
		) {
			id
		}
	}
`
