import React from 'react'
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
import { Auth } from 'aws-amplify'
import { Link as RouterLink } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Login = ({ isOpen, onClose }) => {
	const initialRef = React.useRef()
	const finalRef = React.useRef()

	const handleGoogleLogin = () => {
		Auth.federatedSignIn({
			provider: 'Google'
		})
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
							<Button variantColor="red" float="right" onClick={handleGoogleLogin}>Google</Button>
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
