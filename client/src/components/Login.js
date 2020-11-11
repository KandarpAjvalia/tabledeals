import React, { useContext, useEffect } from 'react'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Box,
	FormControl,
	FormLabel,
	Link,
	Icon,
} from '@chakra-ui/core'
import { Auth, Hub } from 'aws-amplify'
import { Link as RouterLink } from 'react-router-dom'
import { Context as UserContext } from '../context/UserContext'

// eslint-disable-next-line react/prop-types
const Login = ({ isOpen, onClose }) => {
	const initialRef = React.useRef()
	const finalRef = React.useRef()
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
		<Box pb="15px">
			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader fontSize="30px" pb="8px" pl="150px">TableDeals</ModalHeader>
					<ModalHeader pt="8px" pl="125px">Login to your account</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Login with Google</FormLabel>
							<Button variantColor="red" float="right">Google</Button>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Link as={RouterLink} to="/deals" position="relative" pr="115px" pl="100px">
							Continue as a guest
							{' '}
							<Icon name="external-link" mx="2px" />
						</Link>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	)
}

export default Login
