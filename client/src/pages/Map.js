import React from 'react'
import { Marker } from 'react-map-gl'
import MapLocations from '../components/MapLocations'
import RestaurantsPageWrapper from './RestaurantsPageWrapper'

const Map = () => (
	<RestaurantsPageWrapper
		width="full"
		maxWidth="1280px"
		mx="auto"
		px={6}
		py={6}
		isDisabled
	>
		<MapLocations>
			<Marker
				latitude={40.7357}
				longitude={-74.1724}
			>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_pin_icon.svg"
					alt="marker"
					width="25px"
				/>
			</Marker>
		</MapLocations>
	</RestaurantsPageWrapper>
)

export default Map
