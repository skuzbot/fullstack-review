const request = require('request');
const config = require('../config.js');
var axios = require('axios');
var bodyParser = require('body-parser');


let getReposByUsername = (query) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  console.log('github.js query is: ', query); //works. it's skuzbot
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/search/users',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    },
    q: query
  };
  axios.get('https://api.github.com/search/users', {
    params: {
      method: 'get',
      headers: {
        'User-Agent': 'request',
        'Authorization': `token ${config.TOKEN}`
      },
      q: query
    }
  })
  .then(function (response) {
    console.log('*==*==*==*==*==*==* response in github.js :', response.data);
    // TODO send this data to db
  })
  .catch(function (error) {
    console.log('*==*--*==*--==* error in github.js :', error);
  });
}

module.exports.getReposByUsername = getReposByUsername;