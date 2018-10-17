const express = require('express');
let app = express();
var bodyParser = require('body-parser');
var axios = require('axios');
let config = require('../config.js');
const getReposByUsername = require('../helpers/github.js').getReposByUsername;



app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // take github username 
  console.log('********^^^^^********^^^^****** post req.body', req.body.query); //works!! => post req.body { query: 'asdf' }

  // get the repo information from the github API

  console.log(getReposByUsername(req.body.query));

  // axios({
  //   url: 'https://api.github.com/search/users',
  //   method: 'get',
  //   q: req.body.query,
  //   'Authorization': `token ${config.TOKEN}`
  // }).then((res) => {
  //   console.log('github response is: ', res.body);

  // }).catch((err) => {
  //   console.log('err from github: ', err)
  // })

  // save the repo information in the database

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

