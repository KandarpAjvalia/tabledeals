import React from 'react'
import { Flex, IconButton, useColorMode } from '@chakra-ui/core'

const ToggleColorButton = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Flex align="center" color="gray.500">
			<IconButton
				m="2"
				onClick={toggleColorMode}
				icon={colorMode === 'light' ? 'moon' : 'sun'}
				variant="ghost"
			/>
		</Flex>
	)
}

export default ToggleColorButton
