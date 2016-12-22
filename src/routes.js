import React from 'react';
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router'
import App from './modules/App'
import Home from './modules/Home'
import About from './modules/About'
import Repos from './modules/Repos'
import Redux from './modules/Redux'
import {ReduxApp} from './main'

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
