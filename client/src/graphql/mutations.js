import { gql } from '@apollo/client'

// eslint-disable-next-line import/prefer-default-export
export const CREATE_DEAL_MUTATION = gql`
	mutation createDeal(
		$title: String!
		$description: String!
		$dealType: String!
		$restaurantId: uuid!
		$isVegetarian: Boolean!
	) {
		insert_deal_one(object: {
			title: $title
			description: $description
			type: $dealType
			restaurant_id: $restaurantId
			isVegetarian: $isVegetarian
		}) {
			id
		}
	}
`
export const UPSERT_USER_DEAL_MUTATION = gql`
	mutation upsertUserDeal(
		$id: String!
		$dealId: uuid!
		$vote: Int!
	) {
		insert_user_deal_one(
			object: {
				id: $id, 
				deal_id: $dealId,
				vote: $vote
			}, 
			on_conflict: {
				constraint: user_deal_id_key, update_columns: vote
			}) {
				vote
				id
		}
	}
`

export const UPSERT_USER_DEAL_BOOKMARK_MUTATION = gql`
	mutation upsertUserDeal(
		$id: String!
		$dealId: uuid!
		$isBookmarked: Boolean!
	) {
		insert_user_deal_one(
			object: {
				id: $id, 
				deal_id: $dealId,
				isBookmarked: $isBookmarked
			}, 
			on_conflict: {
				constraint: user_deal_id_key, update_columns: isBookmarked
			}) {
				isBookmarked
				id
		}
	}
`
