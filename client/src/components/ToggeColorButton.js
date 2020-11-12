import React from 'react'
import { Flex, IconButton, useColorMode } from '@chakra-ui/core'

const ToggleColorButton = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Flex align="center" color="gray.500">
			<IconButton
				onClick={toggleColorMode}
				icon={colorMode === 'light' ? 'moon' : 'sun'}
			/>
		</Flex>
	)
}
export default ToggleColorButton
