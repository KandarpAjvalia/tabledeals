console.log(process.env.SECRET_KEY)

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.yelp.com/v3/businesses/search?location=newyork, newyork',
  headers: { 
    'Authorization': 'SECRET_KEY'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
