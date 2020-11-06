import React from 'react'
import { Auth } from 'aws-amplify'

const App = () => {
	const handleGoogleLogin = () => {
		Auth.federatedSignIn({
			provider: 'Google'
		})
	}

	const handleGoogleSignout = () => {
		Auth.signOut()
	}

	const getUser = async () => {
		const user = await Auth.currentAuthenticatedUser()
		console.log(user)
	}

	return (
		<div className="App">
			<header className="App-header">
				<button
					type="button"
					onClick={handleGoogleLogin}
				>
					Sign in with Google
				</button>
				<button
					type="button"
					onClick={getUser}
				>
					Get user
				</button>
				<button
					type="button"
					onClick={handleGoogleSignout}
				>
					Sign Out
				</button>
			</header>
		</div>
	)
}

export default App
