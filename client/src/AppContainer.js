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
			<Route path="/" component={Home} />
			<Route path="/deals" component={Deals} />
		</Router>
	)
}

export default AppContainer
