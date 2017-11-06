const axios = require('axios')
const endpoint = 'http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3'

axios
  .get(endpoint)
  .then(response => response.data.results)
  .then(results => console.log(JSON.stringify(results)))
  .catch(error => console.log(error.message))

