const express = require('express');
let app = express();
var bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const mongoose = require('mongoose');
const save = require('../database/index.js').save;



app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  console.log('*==*==*==*==*==*==* post req.body', req.body.query); //works!! => post req.body { query: 'asdf' }
  getReposByUsername(req.body.query, (res) => {
    save(res);
  });
  
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

