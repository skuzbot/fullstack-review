const express = require('express');
let app = express();
var bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github.js').getReposByUsername;



app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // take github username 
  console.log('*==*==*==*==*==*==* post req.body', req.body.query); //works!! => post req.body { query: 'asdf' }

  // get the repo information from the github API
  //console.log('getReposFunction in server: ',getReposByUsername(req.body.query));
  //getReposByUsername(req.body.query, (res) => {console.log('*==*==* res.body in server', res)}); // ! works!!!!
  getReposByUsername(req.body.query, (res) => {
    // ? send to db here?
    
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

