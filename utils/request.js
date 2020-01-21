
const axios = require('axios');
var {API_URL} = require('../common/config')
const http = axios.create()
http.defaults.baseURL = API_URL
http.defaults.timeout = 10000

module.exports = http