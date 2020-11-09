import React from 'react'

import {
	Text, Flex, Box, Stack, Button, Icon, IconButton
} from '@chakra-ui/core'

const Deal = () => {
	return (
		<Stack mb="15px" minW="500px" isInline spacing="100">
			<Text fontSize="18px">Deal information: TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO </Text>
			<Stack bl="300px">
				<IconButton
					variant="outline"
					variantColor="green"
  aria-label="Call Sage"
  fontSize="20px"
  icon="chevron-up"
				/>
				<IconButton
  variant="outline"
  variantColor="red"
  aria-label="Call Sage"
  fontSize="20px"
  icon="chevron-down"
				/>
			</Stack>
		</Stack>

	)
}

export default Deal
