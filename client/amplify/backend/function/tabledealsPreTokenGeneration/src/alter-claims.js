/* eslint-disable no-param-reassign */
exports.handler = async (event, context, callback) => {
	event.response = {
		claimsOverrideDetails: {
			claimsToAddOrOverride: {
				event: JSON.stringify(event.userName),
				'https://hasura.io/jwt/claims': JSON.stringify({
					'x-hasura-allowed-roles': event.request.groupConfiguration.groupsToOverride,
					'x-hasura-default-role': 'users',
					'x-hasura-user-id': event.userName
				})
			},
		},
	}
	callback(null, event)
}
