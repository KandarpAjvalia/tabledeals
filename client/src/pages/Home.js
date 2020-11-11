import React, { useEffect, useContext } from 'react'
import { Auth, Hub } from 'aws-amplify'
import { useHistory } from 'react-router-dom'
import { Context as UserContext } from '../context/UserContext'
import Header from '../components/Header'
import Body from '../components/Body'

const Home = () => {
	const userContext = useContext(UserContext)
	const history = useHistory()

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
				history.push('/deals')
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

	return (
		<div>
			<Header />
			<Body />
		</div>
	)
}

export default Home
