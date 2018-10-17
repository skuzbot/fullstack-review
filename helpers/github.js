const request = require('request');
const config = require('../config.js');
var axios = require('axios');
var bodyParser = require('body-parser');


let getReposByUsername = (query, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  console.log('github.js query is: ', query); // ! booyah.
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
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
      console.log('*==*==*==*==*==*==* response in github.js :', response.data[0].owner.login); // ! wooooo!!!!
      callback(response.data); // ? callback here or just send straight to db?
    })
    .catch(function (error) {
      console.log('error in github.js :', error);
    });
}

module.exports.getReposByUsername = getReposByUsername;

/* user data:

{
  id: 151725352,
  node_id: 'MDEwOlJlcG9zaXRvcnkxNTE3MjUzNTI=',
  name: 'angular-phonecat',
  full_name: 'skuzbot/angular-phonecat',
  private: false,
  owner: {
    login: 'skuzbot',
    id: 42328536,
    node_id: 'MDQ6VXNlcjQyMzI4NTM2',
    avatar_url: 'https://avatars3.githubusercontent.com/u/42328536?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/skuzbot',
    html_url: 'https://github.com/skuzbot',
    followers_url: 'https://api.github.com/users/skuzbot/followers',
    following_url: 'https://api.github.com/users/skuzbot/following{/other_user}',
    gists_url: 'https://api.github.com/users/skuzbot/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/skuzbot/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/skuzbot/subscriptions',
    organizations_url: 'https://api.github.com/users/skuzbot/orgs',
    repos_url: 'https://api.github.com/users/skuzbot/repos',
    events_url: 'https://api.github.com/users/skuzbot/events{/privacy}',
    received_events_url: 'https://api.github.com/users/skuzbot/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/skuzbot/angular-phonecat',
  description: 'Tutorial on building an angular application.',
  fork: true,
  url: 'https://api.github.com/repos/skuzbot/angular-phonecat',
  forks_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/forks',
  keys_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/teams',
  hooks_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/hooks',
  issue_events_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/issues/events{/number}',
  events_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/events',
  assignees_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/assignees{/user}',
  branches_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/branches{/branch}',
  tags_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/tags',
  blobs_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/languages',
  stargazers_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/stargazers',
  contributors_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/contributors',
  subscribers_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/subscribers',
  subscription_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/subscription',
  commits_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/contents/{+path}',
  compare_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/merges',
  archive_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/downloads',
  issues_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/issues{/number}',
  pulls_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/labels{/name}',
  releases_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/releases{/id}',
  deployments_url: 'https://api.github.com/repos/skuzbot/angular-phonecat/deployments',
  created_at: '2018-10-05T13:32:36Z',
  updated_at: '2018-10-05T13:32:39Z',
  pushed_at: '2018-04-14T04:39:31Z',
  git_url: 'git://github.com/skuzbot/angular-phonecat.git',
  ssh_url: 'git@github.com:skuzbot/angular-phonecat.git',
  clone_url: 'https://github.com/skuzbot/angular-phonecat.git',
  svn_url: 'https://github.com/skuzbot/angular-phonecat',
  homepage: 'http://docs.angularjs.org/tutorial',
  size: 105029,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'JavaScript',
  has_issues: false,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  open_issues_count: 0,
  license: {
    key: 'mit',
    name: 'MIT License',
    spdx_id: 'MIT',
    url: 'https://api.github.com/licenses/mit',
    node_id: 'MDc6TGljZW5zZTEz'
  },
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}

*/

