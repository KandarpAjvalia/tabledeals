import React from 'react'
import {
	Stack, Text, Box, useColorMode
} from '@chakra-ui/core'

const Comment = ({
	username,
	commentText
}) => {
	const { colorMode } = useColorMode()
	return (
		<Box
			borderWidth="1px"
			borderRadius={8}
			p={1}
			mb={2}
			bg={colorMode === 'light' ? 'white' : 'gray.700'}
			boxShadow="sm"
		>
			<Stack>
				<Text>
					{username}
					{': '}

					{commentText}
				</Text>
			</Stack>
		</Box>
	)
}
export default Comment
