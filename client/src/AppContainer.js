import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
import Home from './pages/Home'
import Deals from './pages/Deals'

const AppContainer = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/deals" component={Deals} />
		</Switch>
	</Router>
)

export default AppContainer
