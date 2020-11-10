import React, { useContext, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core'
import { Context as UserContext } from './context/UserContext'
import AppContainer from './AppContainer'

const App = () => {
	const userContext = useContext(UserContext)

	const setUserData = async () => {
		const user = await Auth.currentAuthenticatedUser()

		if (user) {
			userContext.setIsAuthenticated(true)
			userContext.setUser({
				...user.attributes
			})
		} else {
			userContext.setUser(null)
			userContext.setIsAuthenticated(false)
		}
	}

	const handleSignOut = () => {
		userContext.setUser(null)
		userContext.setIsAuthenticated(false)
	}

	useEffect(() => {
		setUserData()

		const authListener = (data) => {
			switch (data.payload.event) {
			case 'signIn':
				console.log('sign in')
				setUserData()
				break
			case 'signOut':
				console.log('sign out')
				handleSignOut()
				break
			default:
			}
		}

		Hub.listen('auth', authListener)

		return () => {
			Hub.remove('auth', authListener)
		}
	}, [])

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
		<ThemeProvider theme={theme}>
			<CSSReset />
			<AppContainer />
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
		</ThemeProvider>
	)
}
export default App
