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
const MotionHeading = motion.custom(Heading)

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
	title, subtitle, description, description2, ImageComponent, imagePosition = 'left', imgW
}) => {
	const controls = useAnimation()
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.4
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
			variants={variant}
			transition={{ duration: 2 }}
			m={25}
		>
			<Text opacity="0.8" fontSize="2xl" fontWeight="black" textAlign="left">
				{subtitle}
			</Text>
			<Text opacity="0.7" fontSize="lg" textAlign="left">
				{description}
				{' '}
				<b>{description2}</b>
			</Text>
		</MotionBox>
	)
	return (
		<Box textAlign="center" mb={20} ref={ref}>
			<MotionHeading
				as="h1"
				size="xl"
				fontWeight="black"
				animate={controls}
				initial="hidden"
				variants={variant}
				transition={{ duration: 1.5 }}
			>
				{title}
			</MotionHeading>
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
