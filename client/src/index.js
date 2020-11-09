import React from 'react'
import ReactDOM from 'react-dom'
import Amplify from 'aws-amplify'
import config from './aws-exports'
import App from './App'
import { Provider as UserProvider } from './context/UserContext'

Amplify.configure(config)

ReactDOM.render(
	<UserProvider>
		<App />
	</UserProvider>,
	document.getElementById('root')
)
