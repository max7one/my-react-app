import React from 'react';
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router'
import App from './App'
import Home from './Home'
import Repos from './Repos'
import About from './About'
import ReduxApp from '../redux/containers/Todo'
import Todomvc from '../redux/containers/todoMVC.js'
import New from '../redux/containers/new'

export default(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/new" component={New}/>
      <Route path="/about" component={About}/>
      <Route path="/redux" component={ReduxApp}/>
      <Route path="/todomvc" component={Todomvc}/>
    </Route>
  </Router>
)
