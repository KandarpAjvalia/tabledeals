import React, { useEffect } from 'react'
import {
	Box,
	Heading,
	Flex,
	Image,
	Text
} from '@chakra-ui/core'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import KandarpImage from '../images/kandarp.png'
import GerryImage from '../images/gerry.png'
import MohamedImage from '../images/mohamed.png'
import BenImage from '../images/ben.png'

const MotionBox = motion.custom(Box)
const MotionHeading = motion.custom(Heading)

const variant = {
	visible: {
		opacity: 1,
		y: 0
	},
	hidden: {
		opacity: 0,
		y: 200
	}
}

const technologies = [
	{
		name: 'Kandarp Ajvalia',
		ImageComponent: KandarpImage
	},
	{
		name: 'Gerry Agbay',
		ImageComponent: GerryImage
	},
	{
		name: 'Benjamin Robinson',
		ImageComponent: BenImage
	},
	{
		name: 'Mohamed Shalaby',
		ImageComponent: MohamedImage
	}
]

const LPTeam = () => {
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

	return (
		<MotionBox textAlign="center" mb={20} ref={ref}>
			<MotionHeading
				as="h1"
				size="xl"
				fontWeight="black"
				mb={10}
				animate={controls}
				initial="hidden"
				variants={{
					...variant,
					hidden: {
						opacity: 0,
						y: 0
					}
				}}
				transition={{ duration: 2 }}
			>
				Team
			</MotionHeading>
			<Flex size="100%" align="center" justify="space-between">
				{technologies.map((
					{ name, ImageComponent }
				) => (
					<MotionBox
						bg="gray.700"
						borderRadius={10}
						boxShadow="rgba(0, 0, 0, 0.4) 0px 30px 30px"
						animate={controls}
						initial="hidden"
						variants={variant}
						transition={{ duration: 1.5 }}
					>
						<Image
							h={150}
							m={10}
							src={ImageComponent}
							borderRadius="50%"
						/>
						<Text fontSize="lg" mb={5} color="white">
							{name}
						</Text>
					</MotionBox>
				))}
			</Flex>
		</MotionBox>
	)
}

export default LPTeam
