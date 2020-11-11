import React from 'react'
import { Button } from '@chakra-ui/core'
import { Auth } from 'aws-amplify'

const Logout = () => {
	const handleSignOut = () => {
		Auth.signOut()
	}

	return (
		<Button variantColor="orange" size="md" fontSize="md" onClick={handleSignOut}>Log out</Button>

	)
}
export default Logout
