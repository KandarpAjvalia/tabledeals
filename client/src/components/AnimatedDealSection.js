import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import {
	Box,
	Flex,
	Text,
	Image
} from '@chakra-ui/core'
import DealImage from '../images/deal.png'

const MotionBox = motion.custom(Box)

const variant = {
	visible: {
		opacity: 1,
		x: 0
	},
	hidden: {
		opacity: 0,
		x: '-100vh'
	}
}

const AnimatedDeal = () => {
	const controls = useAnimation()
	const [ref, inView] = useInView({
		rootMargin: '-300px 0px'
	})

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])

	return (
		<Box mx="auto" textAlign="center">
			<Flex size="100%" align="center" justify="space-between">
				<MotionBox
					mx="auto"
					mt={100}
					mb={100}
					textAlign="center"
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={variant}
					transition={{ duration: 1.5 }}
				>
					<Image
						maxW="800px"
						boxShadow="rgba(0, 0, 0, 0.4) 0px 30px 30px"
						borderRadius={10}
						src={DealImage}
						alt="deals"
					/>
				</MotionBox>
				<MotionBox
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={{
						visible: {
							opacity: 1,
							x: 0
						},
						hidden: {
							opacity: 0,
						}
					}}
					transition={{ duration: 1.5 }}
				>
					<Text opacity="0.7" fontSize="lg" m="6">
						From chain restaurants to local businesses, TableDeals helps users find
						special discounts on food.
					</Text>
				</MotionBox>
			</Flex>
		</Box>
	)
}

export default AnimatedDeal
