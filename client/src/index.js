import React from 'react'
import ReactDOM from 'react-dom'
import Amplify from 'aws-amplify'
import { ApolloProvider } from '@apollo/client'
// import config from './aws-exports'
import App from './App'
import { Provider as UserProvider } from './context/UserContext'
import { createApolloClient } from './graphql/apollo'

// Amplify.configure(config)

const client = createApolloClient()

ReactDOM.render(
	<ApolloProvider client={client}>
		<UserProvider>
			<App />
		</UserProvider>
	</ApolloProvider>,
	document.getElementById('root')
)
