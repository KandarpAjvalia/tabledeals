/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react'
import {
	Stack, Text, Box, useColorMode, Avatar
} from '@chakra-ui/core'

const Comment = ({
	username, commentText, profile_pic
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
			<Stack isInline>
				<Avatar size="xs" name={username} src={profile_pic} />
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
