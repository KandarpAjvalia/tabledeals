import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	browserHistory,
	Link
} from 'react-router-dom'
import Header from './Home/Header'
import Body from './Home/Body'
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
