const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database connected');
  // ?  other stuff inside? added repoSchema and Repo

  let repoSchema = new mongoose.Schema({ // ? added new keyword per mongoose docs
    id: Number,
    name: String,
    owner: String,
    description: String,
    url: String,
    created: String,
    updated: String,
    stars: Number,
    forks: Number,
    watchers: Number
  });

  let Repo = mongoose.model('Repo', repoSchema);

})



let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  //need to handle duplicate repos
  //  checks id for same 
}

module.exports.save = save;