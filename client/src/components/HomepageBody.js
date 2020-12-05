import React from 'react'
import {
	Box,
	Heading,
	Text,
	Image
} from '@chakra-ui/core'
import {
	motion,
	useViewportScroll,
	useTransform
} from 'framer-motion'
import DealsImage from '../images/deals-page.png'

const MotionBox = motion.custom(Box)

// eslint-disable-next-line react/jsx-props-no-spreading
export const Container = (props) => <Box width="full" maxWidth="1280px" mx="auto" px={6} {...props} />

const HomepageBody = () => {
	const { scrollYProgress } = useViewportScroll()

	const xRotAnim = useTransform(scrollYProgress, [0, 0.5, 1], [30, 15, 0])

	return (
		<Box as="section" pt={40} pb={24}>
			<Container>
				<Box maxW="xl" mx="auto" mb={10} textAlign="center">
					<Heading as="h1" size="xl" fontWeight="black">
						An easy way to find the best deals around you so that you can save on food.
					</Heading>

					<Text opacity="0.7" fontSize="lg" mt="6">
						From chain restaurants to local businesses, TableDeals helps users find
						special discounts on food.
					</Text>
				</Box>
				<MotionBox
					mx="auto"
					// maxW={700}
					textAlign="center"
					style={{
						perspective: 800,
						rotateX: xRotAnim,
					}}
				>
					<Image src={DealsImage} alt="deals" />
				</MotionBox>
			</Container>
		</Box>
	)
}

export default HomepageBody
