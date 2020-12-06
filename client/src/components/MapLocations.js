import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'
const MapLocation = () => {
	const [viewport, setViewport] = useState({
		latitude: -1.9444,
		longitude: 30.0616,
		zoom: 7.8,
		bearing: 0,
		pitch: 0,
	})
	return (
		<div className="mapbox-react">
			<ReactMapGL
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...viewport}
				width="1000px"
				height="500px"
				mapStyle="mapbox://styles/mapbox/streets-v11"
				onViewportChange={(nextViewport) => setViewport(nextViewport)}
				mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
			/>
		</div>
	)
}
export default MapLocation
