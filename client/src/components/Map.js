import React from 'react'
import MapLocations from './MapLocations'
import RestaurantsPageWrapper from './RestaurantsPageWrapper'

const Map = () => (
	<RestaurantsPageWrapper
		width="full"
		maxWidth="1280px"
		mx="auto"
		px={6}
		py={6}
	>
		<MapLocations />
	</RestaurantsPageWrapper>
)
export default Map
