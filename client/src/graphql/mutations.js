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
export const INSERT_USER_DEAL_MUTATION = gql`
	mutation insert_user_deal(
		$dealId: uuid!
		$userDealVote: int!
	) {
		insert_user_deal_one (object: {
			deal_id: $dealId
			vote: $userVote
		}) {
			id
		}
	}
`
export const UPDATE_USER_DEAL_MUTATION = gql`
	mutation update_user_deal(
		$dealId: uuid!
		$userId: uuid!
		$userDealVote: int!
	) {
		update_user_deal(
			where: {
				deal_id: {eq: $dealId},
				user_id: {eq: $userId}
			},
			_set: {vote: 0}
		)
	}
`
