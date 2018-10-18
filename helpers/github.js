const config = require('../config.js');
var axios = require('axios');

let getReposByUsername = (query, callback) => {
  axios.get(`https://api.github.com/users/${query}/repos`, {
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
      callback(response.data); // ? callback here or just send straight to db?
    })
    .catch(function (error) {
      console.log('error in github.js :', error);
    });
}

module.exports.getReposByUsername = getReposByUsername;


