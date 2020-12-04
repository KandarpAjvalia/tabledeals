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
			vote
		}
	}

`
export const GET_USER_DEAL_BOOKMARK_QUERY = gql`
	query getUserDealBookmark(
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
			isBookmarked
		}
	}
`

export const GET_BOOKMARKED_DEALS_QUERY = gql`
	query getBookmarkedDeals (
		$userId: uuid!
	) {
	deal(
		where: {
			user_deals: {
				_and: {
					isBookmarked: {
						_eq: true
					}, 
					user_id: {
						_eq: $userId
					}
				}
			}
		}
	) {
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

export const SUM_USER_DEAL_VOTES_QUERY = gql`
	query sumDealVotes(
		$dealId: uuid!
	) {
	user_deal_aggregate(
		where: {
		deal_id: {
			_eq: $dealId
		}
	}) {
		aggregate {
			sum {
				vote
			}
		}
		}
	}

`
export const GET_DEAL_BY_ID_QUERY = gql`
	query findDeal(
		$id: uuid!
		) {
			deal(
				where : {
					id: { 
						_eq: $id 
					} 
				}
		) {
			id
			title
			type
			restaurant {
				id
				name
				description
				image_url
				street
				city
				state
				zip
				opening_time
				closing_time
			}
		}
	}
`
export const GET_RESTAURANTS_ALL_INFO_QUERY = gql`
	query getRestaurantsAllInfo {
		restaurant {
			id
			name
			description
			image_url
			street
			city
			state
			zip
			opening_time
			closing_time
  		}
	}
`
