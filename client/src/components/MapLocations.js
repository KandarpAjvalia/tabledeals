import React, { useState } from 'react'
import { useColorMode } from '@chakra-ui/core'
import ReactMapGL from 'react-map-gl'

const mapVariants = {
	light: 'mapbox/streets-v11',
	dark: 'kajvalia/ckidsm04v2z651apgywfo3dhp'
}

const MapLocations = () => {
	const { colorMode } = useColorMode()

	const [viewport, setViewport] = useState({
		latitude: 40.7357,
		longitude: -74.1724,
		zoom: 12,
		bearing: 0,
		pitch: 0,
	})

	return (
		<div>
			<ReactMapGL
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...viewport}
				width="1000px"
				height="700px"
				mapStyle={`mapbox://styles/${mapVariants[colorMode]}`}
				onViewportChange={(nextViewport) => setViewport(nextViewport)}
				mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
			/>
		</div>
	)
}
export default MapLocations
