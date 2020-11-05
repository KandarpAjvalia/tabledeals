/* eslint-disable no-param-reassign */
exports.handler = async (event, context, callback) => {
	event.response = {
		claimsOverrideDetails: {
			claimsToAddOrOverride: {
				event: JSON.stringify(event.userName),
				'https://hasura.io/jwt/claims': JSON.stringify({
					'x-hasura-allowed-roles': event.request.groupConfiguration.groupsToOverride,
					'x-hasura-default-role': 'user',
					'x-hasura-user-id': event.request.userAttributes.sub
				})
			},
		},
	}
	callback(null, event)
}
