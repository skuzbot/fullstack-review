const request = require('request');
const config = require('../config.js');


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

}

module.exports.getReposByUsername = getReposByUsername;