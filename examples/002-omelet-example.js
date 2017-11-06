const axios = require('axios')
const endpoint = 'http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3'

axios
  .get(endpoint)
  .then(response => console.log(JSON.stringify(response.data)))
  .catch(error => console.log(error.message))

