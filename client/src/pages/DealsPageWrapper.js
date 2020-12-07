/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Box, useColorMode } from '@chakra-ui/core'
import DealsHeader from '../components/DealsHeader'
import DealSideBar from '../components/DealsSideBar'

const PageWrapper = ({
	// eslint-disable-next-line react/prop-types
	children, dealSearch, handleDealSearch, isDisabled = false, ...rest
}) => {
	const { colorMode } = useColorMode()

	return (
		<>
			<DealsHeader
				dealSearch={dealSearch}
				handleDealSearch={handleDealSearch}
				isDisabled={isDisabled}
			/>
			<Box>
				<DealSideBar maxWidth="18rem" width="full" />
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

export default PageWrapper
