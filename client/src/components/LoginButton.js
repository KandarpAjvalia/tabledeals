import React from 'react'
import {
	Button, useDisclosure
} from '@chakra-ui/core'
import Login from './Login'

const LoginButton = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Button variant="ghost" onClick={onOpen}>
				Sign In
			</Button>
			<Login isOpen={isOpen} onClose={onClose} />
		</>
	)
}

export default LoginButton
