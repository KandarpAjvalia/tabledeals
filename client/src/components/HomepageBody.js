import React from 'react'
import {
	Box,
	Heading,
	Text,
	Image,
} from '@chakra-ui/core'
import {
	motion,
	useViewportScroll,
	useTransform,
} from 'framer-motion'
import DealsImage from '../images/deals-page.png'
import DealImage from '../images/deal.png'
import AnimatedDealSection from './LPAnimatedCardSection'
import RestaurantImage from '../images/restaurant.png'
import LPTechStack from './LPTechStack'
import LPTeam from './LPTeam'

const MotionBox = motion.custom(Box)

const sectionData = [
	{
		title: 'Deals',
		description: 'Find the best deals on your daily food. Search. Add. Vote. Comment',
		imagePosition: 'left',
		imgW: '850px',
		ImageComponent: DealImage
	},
	{
		title: 'Restaurants',
		description: 'Find the best restaurants near you, and see the deals at the restaurants',
		imagePosition: 'right',
		imgW: '350px',
		ImageComponent: RestaurantImage
	}
]

// eslint-disable-next-line react/jsx-props-no-spreading
export const Container = (props) => <Box width="full" maxWidth="1280px" mx="auto" px={6} {...props} />

const HomepageBody = () => {
	const { scrollYProgress } = useViewportScroll()

	const xRotAnim = useTransform(scrollYProgress, [0, 0.25, 0.5], [30, 15, 0])

	return (
		<Box as="section" pt={40} pb={24}>
			<Container h="100vh" mb={200}>
				<Box maxW="xl" mx="auto" textAlign="center">
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
					textAlign="center"
					style={{
						perspective: 800,
						rotateX: xRotAnim,
					}}
				>
					<Image
						src={DealsImage}
						alt="deals"
						borderRadius={10}
						boxShadow="rgba(0, 0, 0, 0.4) 0px 30px 30px"
					/>
				</MotionBox>
			</Container>
			<Container>
				{sectionData.map(({
					title, description, imagePosition, ImageComponent, imgW
				}) => (
					<AnimatedDealSection
						title={title}
						description={description}
						ImageComponent={ImageComponent}
						imagePosition={imagePosition}
						imgW={imgW}
					/>
				))}
			</Container>
			<Container>
				<LPTechStack />
			</Container>
			<Container>
				<LPTeam />
			</Container>
		</Box>
	)
}

export default HomepageBody
