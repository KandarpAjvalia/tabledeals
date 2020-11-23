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
