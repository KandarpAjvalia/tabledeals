const fetch = require('node-fetch')

const { ADMIN_SECRET, HASURA_GQL_URL } = process.env

const query = `
	mutation registerUser(
		$id: uuid!
		$email: String! 
		$name: String!
		$profilePic: String!
	) {
		insert_users_one(object: {
			id: $id, 
			email: $email, 
			name: $name, 
			profile_pic: $profilePic
		}) {
			id
		}
  	}  
`

exports.handler = (event, context, callback) => {
	console.log(event)
	try {
		const queryVariables = {
			id: event.request.userAttributes.sub,
			email: event.request.userAttributes.email,
			name: event.request.userAttributes.name,
			profilePic: event.request.userAttributes.picture
		}

		fetch(`${HASURA_GQL_URL}/v1/graphql`, {
			method: 'POST',
			body: JSON.stringify({
				query,
				variables: queryVariables
			}),
			headers: {
				'Content-Type': 'application/json',
				'x-hasura-admin-secret': ADMIN_SECRET
			}
		})
			.then((res) => res.json())
			.then((json) => {
				console.log(json)
				callback(null, event)
			})
	} catch (e) {
		console.err(e)
		callback(null, event)
	}
}
