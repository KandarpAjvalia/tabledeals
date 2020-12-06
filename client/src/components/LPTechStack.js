import React from 'react'
import {
	Box,
	Heading,
	Flex,
	Image,
	Text
} from '@chakra-ui/core'
import { motion } from 'framer-motion'
import ReactImage from '../images/react.png'
import GraphQLImage from '../images/graphql.png'
import PostgresImage from '../images/postgres.png'

const MotionBox = motion.custom(Box)

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

const LPTechStack = () => (
	<Box textAlign="center" mb={20}>
		<Heading as="h1" size="xl" fontWeight="black">
			Technologies
		</Heading>
		<Flex size="100%" align="center" justify="space-between">
			{technologies.map((
				{ title, ImageComponent }
			) => (
				<MotionBox>
					<Image
						h={200}
						m={10}
						src={ImageComponent}
					/>
					<Text>
						{title}
					</Text>
				</MotionBox>
			))}
		</Flex>
	</Box>
)

export default LPTechStack
