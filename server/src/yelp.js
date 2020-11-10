require('dotenv').config()

const axios = require('axios')

const config = {
	method: 'get',
	url: 'https://api.yelp.com/v3/businesses/search?location=newyork, newyork',
	headers: {
		Authorization: process.env.YELP_SECRET_KEY
	},
}

axios(config)
	.then((response) => {
		console.log(JSON.stringify(response.data))
	})
	.catch((error) => {
		console.log(error)
	})
