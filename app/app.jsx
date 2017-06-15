const React = require('react');
const ReactDOM = require('react-dom');
const {Router, Route, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}/>
  </Router>,
  document.getElementById('app')
);
