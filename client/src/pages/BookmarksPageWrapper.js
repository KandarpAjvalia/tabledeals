/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Box, useColorMode } from '@chakra-ui/core'
import BookmarksHeader from '../components/BookmarksHeader'
import BookmarksSideBar from '../components/BookmarksSideBar'

// eslint-disable-next-line react/prop-types
const BookmarksPageWrapper = ({ children, ...rest }) => {
	const { colorMode } = useColorMode()

	return (
		<>
			<BookmarksHeader />
			<Box>
				<BookmarksSideBar maxWidth="18rem" width="full" />
				<Box pl={[0, null, '18rem']} mt="4rem">
					<Box
						as="section"
						bg={colorMode === 'light' ? 'white' : 'gray.800'}
						minHeight="calc(100vh - 4rem)"
						p="1rem"
					>
						<Box {...rest}>{children}</Box>
					</Box>
				</Box>
			</Box>
		</>
	)
}
export default BookmarksPageWrapper
