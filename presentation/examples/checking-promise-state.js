const axios = require('axios')

const res = axios.get('http://www.google.com')

const status = setInterval(() => console.log(res), 500)

res.then(() => clearInterval(status))

console.log('Google')
