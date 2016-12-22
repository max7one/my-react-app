import React from 'react';
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router'
import App from './App'
import Home from './Home'
import About from './About'
import Repos from './Repos'
import {ReduxApp} from '../redux/containers/Todo'

export default(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}/>
      <Route path="/about" component={About}/>
      <Route path="/redux" component={ReduxApp}/>
    </Route>
  </Router>
)
