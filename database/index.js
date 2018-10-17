const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database connected');
  // ?  other stuff inside? added repoSchema and Repo

  let repoSchema = new mongoose.Schema({ // ? added new keyword per mongoose docs
    id: {type: Number, index: true, unique: true},   //  data.id
    name: String,                       //  data.name
    description: String,                //  data.description
    url: String,                        //  data.html_url
    created: String,                    //  data.created_at
    updated: String,                    //  data.updated_at
    stars: Number,                      //  data.stargazers_count
    watchers: Number,                   //  data.watchers_count
    forks: Number,                      //  data.forks
    owner: String,                      //  data.owner.login
    owner_img: String,                  //  data.owner.avatar_url
    owner_link: String,                 //  data.owner.html_url
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