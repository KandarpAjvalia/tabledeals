import React, { useState } from 'react'
import { useColorMode } from '@chakra-ui/core'
import ReactMapGL from 'react-map-gl'

const mapVariants = {
	light: 'mapbox/streets-v11',
	dark: 'kajvalia/ckidsm04v2z651apgywfo3dhp'
}

// eslint-disable-next-line react/prop-types
const MapLocations = ({ children }) => {
	const { colorMode } = useColorMode()
	const [viewport, setViewport] = useState({
		latitude: 40.73795323582187,
		longitude: -73.99010002209329,
		zoom: 12,
		bearing: 0,
		pitch: 0,
	})

	return (
		<ReactMapGL
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...viewport}
			width="1000px"
			height="700px"
			mapStyle={`mapbox://styles/${mapVariants[colorMode]}`}
			onViewportChange={(nextViewport) => setViewport(nextViewport)}
			mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
		>
			{children}
		</ReactMapGL>
	)
}
export default MapLocations
