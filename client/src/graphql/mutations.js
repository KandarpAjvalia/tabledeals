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
export const CREATE_COMMENT_MUTATION = gql`
	mutation createComment(
		$comment: String!
	) {
  insert_user_deal_one(objects: {comment: $comment})
}
`
