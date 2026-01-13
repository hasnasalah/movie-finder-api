const axios = require('axios');

const jsonplaceholderClient = axios.create({
  baseURL: 'http://www.omdbapi.com/',
 

});

module.exports = jsonplaceholderClient;