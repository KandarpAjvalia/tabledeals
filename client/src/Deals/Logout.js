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

function Logout() {
	return (
		<Button variantColor="orange" size="lg" fontSize="xl" pos="absolute" right="75px" top="15px">Log out</Button>
	)
}

export default Logout
