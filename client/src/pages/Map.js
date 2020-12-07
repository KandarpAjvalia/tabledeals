import React from 'react'
import { Marker } from 'react-map-gl'
import { useQuery } from '@apollo/client'
import MapLocations from '../components/MapLocations'
import RestaurantsPageWrapper from './RestaurantsPageWrapper'
import { GET_RESTAURANTS_QUERY } from '../graphql/queries'

const Map = () => {
	const { data } = useQuery(GET_RESTAURANTS_QUERY)
	return (
		<RestaurantsPageWrapper
			width="full"
			maxWidth="1280px"
			mx="auto"
			px={6}
			py={6}
			isDisabled
		>
			<MapLocations>
				{data && data.restaurant.map((
					{ lat, lon }
				) => (
					<Marker
						key={lat}
						latitude={lat}
						longitude={lon}
					>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_pin_icon.svg"
							alt="marker"
							width="25px"
						/>
					</Marker>
				))}
			</MapLocations>
		</RestaurantsPageWrapper>
	)
}
export default Map
