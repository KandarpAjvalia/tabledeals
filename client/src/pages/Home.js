import React, { useEffect, useContext } from 'react'
import { Auth, Hub } from 'aws-amplify'
import { useHistory } from 'react-router-dom'
import { Context as UserContext } from '../context/UserContext'
import HomepageHeader from '../components/HomepageHeader'
import HomepageBody from '../components/HomepageBody'

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
				setUserData()
				history.push('/deals')
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
		<div>
			<HomepageHeader />
			<HomepageBody />
		</div>
	)
}

export default Home
