
import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'
const MapLocations = () => {
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
				mapStyle="mapbox://styles/mapbox/streets-v11"
				onViewportChange={(nextViewport) => setViewport(nextViewport)}
				mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
			/>
		</div>
	)
}
export default MapLocations
