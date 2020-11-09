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
	useDisclosure,
	Link,
	Icon,
}
	from '@chakra-ui/core'
import { Link as RouterLink } from 'react-router-dom'

const Login = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const initialRef = React.useRef()
	const finalRef = React.useRef()

	return (
		<Box pb="15px">
			<Button onClick={onOpen} variantColor="orange" size="lg" fontSize="xl" pos="absolute" right="15px" top="15px">Log in</Button>

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

						<FormControl mt={4}>
							<FormLabel>Login with Facebook</FormLabel>
							<Button variantColor="blue" float="right">Facebook</Button>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Link as={RouterLink} to="/deals" isExternal position="relative" pr="115px" pl="100px">
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
