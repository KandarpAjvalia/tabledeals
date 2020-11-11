import React, { useEffect, useContext } from 'react'
import { Auth, Hub } from 'aws-amplify'
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'
import Home from './pages/Home'
import Deals from './pages/Deals'
import { Context as UserContext } from './context/UserContext'

const AppContainer = () => {
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
				setUserData()
				break
			case 'signOut':
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

	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/deals" component={Deals} />
			</Switch>
		</Router>
	)
}

export default AppContainer
