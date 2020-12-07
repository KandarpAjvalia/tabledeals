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
import ReactImage from '../images/react.png'
import GraphQLImage from '../images/graphql.png'
import PostgresImage from '../images/postgres.png'

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
		title: 'React',
		ImageComponent: ReactImage
	},
	{
		title: 'GraphQL',
		ImageComponent: GraphQLImage
	},
	{
		title: 'Postgres',
		ImageComponent: PostgresImage
	}
]

const LPTechStack = () => {
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
				Technologies
			</MotionHeading>
			<Flex size="100%" align="center" justify="space-between">
				{technologies.map((
					{ title, ImageComponent }
				) => (
					<MotionBox
						animate={controls}
						initial="hidden"
						variants={variant}
						transition={{ duration: 1.5 }}
					>
						<Image
							h={200}
							m={10}
							src={ImageComponent}
						/>
						<Text fontSize="lg">
							{title}
						</Text>
					</MotionBox>
				))}
			</Flex>
		</MotionBox>
	)
}

export default LPTechStack
