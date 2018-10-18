const express = require('express');
let app = express();
var bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const mongoose = require('mongoose');
const save = require('../database/index.js').save;
const getRepos = require('../database/index.js').getRepos;



app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  console.log('*==*==*==*==*==*==* post req.body', req.body.query); //works!! => post req.body { query: 'asdf' }
  getReposByUsername(req.body.query, (res) => {
    save(res);
  });
  res.end('post successful');
  
});

app.get('/repos', function (req, res) {
  getRepos((err, repos) => {
    if (err) {
      console.log('err getting repo res', err);
    } else {
      //console.log('GET res repos in server is', repos); // ! works!! got 25 sorted by stars
      repoArray = JSON.stringify(repos);
      //console.log('repoArray in server is: ', repoArray);
      res.send(repoArray);
    }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

