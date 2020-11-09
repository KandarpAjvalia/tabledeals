import React from 'react'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'
import Home from './Home/Home'
import Deals from './Deals/Deals'

function AppContainer() {
	return (
		<Router>
			<Route path="/d" component={Home} />
			<Route path="/" component={Deals} />
		</Router>
	)
}

export default AppContainer
