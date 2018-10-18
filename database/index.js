const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database connected');
});

let repoSchema = new mongoose.Schema({ // ? added new keyword per mongoose docs
  id: {type: Number, index: true, unique: true},
  name: String, 
  description: String,
  url: String,
  created: String,
  updated: String,                    
  stars: Number,
  watchers: Number,
  forks: Number,
  owner: String,
  owner_img: String,
  owner_link: String,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {

  data.forEach(repo => {
    repo = new Repo({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      created: repo.created_at,
      updated: repo.updated_at,
      stars: repo.stargazers_count,
      watchers: repo.watchers_count,
      forks: repo.forks,
      owner: repo.owner.login,
      owner_img: repo.owner.avatar_url,
      owner_link: repo.owner.html_url,
    })

    repo.save((err, repo) => {
      if (err) {
        console.log('error saving repo to db');
      } else {
        console.log('repo saved');
      }
    });
  })
}

module.exports.save = save;