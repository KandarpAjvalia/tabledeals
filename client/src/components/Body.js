import React from 'react'
import {
	Box, Heading, Text, Button
} from '@chakra-ui/core'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/jsx-props-no-spreading
export const Container = (props) => <Box width="full" maxWidth="1280px" mx="auto" px={6} {...props} />

const Body = () => (
	<Box as="section" pt={40} pb={24}>
		<Container>
			<Box maxW="xl" mx="auto" textAlign="center">
				<Heading as="h1" size="xl" fontWeight="black">
					An easy way to find the best deals around you so that you can save on food.
				</Heading>

				<Text opacity="0.7" fontSize="lg" mt="6">
					From chain restaurants to local businesses, TableDeals helps users find
					special discounts on food.
				</Text>

				<Box mt="6">
					<Link to="/deals">
						<Button size="lg" variantColor="orange">
							Get Started
						</Button>
					</Link>
				</Box>
			</Box>
		</Container>
	</Box>
)

export default Body
