import React from 'react'
import { Box } from '@chakra-ui/core'
import DealsHeader from '../components/DealsHeader'
import DealSideBar from '../components/DealsSideBar'
import DealCard from '../components/DealCard'

const Deals = () => (
	<>
		<DealsHeader />
		<Box>
			<DealSideBar maxWidth="18rem" width="full" />
			<Box pl={[0, null, '18rem']} mt="4rem">
				<Box
					as="section"
					backgroundColor="gray.100"
					minHeight="calc(100vh - 4rem)"
					p="1rem"
				>
					<DealCard />
					<DealCard />
					<DealCard />
					<DealCard />
				</Box>
			</Box>
		</Box>
	</>
)
export default Deals
