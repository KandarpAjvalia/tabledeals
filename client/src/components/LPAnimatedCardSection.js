import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import {
	Box,
	Flex,
	Text,
	Image,
	Heading
} from '@chakra-ui/core'

const MotionBox = motion.custom(Box)

const slidePosition = {
	left: '-100vw',
	right: '100vw'
}

const variant = {
	visible: {
		opacity: 1,
		x: 0
	},
	hidden: {
		opacity: 0,
	}
}

const AnimatedDeal = ({
	// eslint-disable-next-line react/prop-types
	title, description, ImageComponent, imagePosition = 'left', imgW
}) => {
	const controls = useAnimation()
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.25
	})

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])

	const ImagePart = () => (
		<MotionBox
			my={100}
			mt={20}
			textAlign="center"
			animate={controls}
			initial="hidden"
			variants={{
				...variant,
				hidden: {
					x: slidePosition[imagePosition]
				}
			}}
			transition={{ duration: 1.5 }}
		>
			<Image
				maxW={imgW}
				boxShadow="rgba(0, 0, 0, 0.4) 0px 30px 30px"
				borderRadius={10}
				src={ImageComponent}
				alt="deals"
			/>
		</MotionBox>
	)

	const TextPart = () => (
		<MotionBox
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
			m={10}
		>
			<Text opacity="0.7" fontSize="lg">
				{description}
			</Text>
		</MotionBox>
	)
	return (
		<Box textAlign="center" mb={20} ref={ref}>
			<Heading as="h1" size="xl" fontWeight="black">
				{title}
			</Heading>
			<Flex size="100%" align="center" justify="space-between">
				{imagePosition === 'left' ? (
					<>
						<ImagePart />
						<TextPart />
					</>
				) : (
					<>
						<TextPart />
						<ImagePart />
					</>
				)}
			</Flex>
		</Box>
	)
}

export default AnimatedDeal
