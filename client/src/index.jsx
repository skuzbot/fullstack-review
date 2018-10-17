import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
//import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
    this.search = this.search.bind(this);
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO send get and post to server // probably using $axios
    axios({
      method: 'post',
      url: '/repos',
      data: {
        query: term
      }
    }).then(function (response) {
    console.log('response in index.jsx: ', response);
  })
  .catch(function (error) {
    console.log('error in index.jsx: ', error);
  });

  }

  componentDidMount() {
    // TODO receive data and push to repos array in state
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));