/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, PseudoBox, useColorMode } from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import React, { cloneElement, forwardRef } from 'react'

const NavLink = ({ children, ...props }) => {
	let isActive = false

	// eslint-disable-next-line react/destructuring-assignment
	if (window.location.pathname === props.to) {
		isActive = true
	}

	return (
		<Link {...props}>
			{typeof children === 'function' ? children(isActive) : children}
		</Link>
	)
}

export const stringToUrl = (str, path = '/') => `${path}${str
	.toLowerCase()
	.split(' ')
	.join('-')}`

export const SideNavLink = forwardRef(({ children, icon, ...props }, ref) => {
	const { colorMode } = useColorMode()
	const color = { light: 'gray.700', dark: 'whiteAlpha.700' }
	return (
		<PseudoBox
			ref={ref}
			as="a"
			display="flex"
			cursor="pointer"
			align="center"
			px="2"
			py="1"
			transition="all 0.2s"
			fontWeight="medium"
			outline="none"
			_focus={{ shadow: 'outline' }}
			color={color[colorMode]}
			_notFirst={{ mt: 1 }}
			{...props}
		>
			{icon && cloneElement(icon, { mr: 3 })}
			<Box>{children}</Box>
		</PseudoBox>
	)
})

export const ComponentLink = forwardRef(({ href, ...props }, ref) => {
	const { colorMode } = useColorMode()
	const hoverColor = { light: 'gray.900', dark: 'whiteAlpha.900' }
	const activeColor = { light: 'orange.500', dark: 'orange.200' }
	const activeBg = { light: 'gray.200', dark: 'gray.600' }

	return (
		<NavLink to={href}>
			{(isActive) => (
				<SideNavLink
					ref={ref}
					aria-current={isActive ? 'page' : undefined}
					_hover={{
						color: hoverColor[colorMode],
						transform: 'translateX(5px)'
					}}
					// eslint-disable-next-line react/jsx-props-no-spreading
					{...(isActive && {
						bg: activeBg[colorMode],
						rounded: 'sm',
						borderRadius: 4,
						color: activeColor[colorMode],
						_hover: {}
					})}
					{...props}
				/>
			)}
		</NavLink>
	)
})
