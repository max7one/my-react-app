import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Redux from './modules/Redux'
import {ReduxApp, store} from './main.jsx'

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/repos" component={Repos}/>
      <Route path="/about" component={About}/>
      <Route path="/redux" component={ReduxApp}/>
    </Router>
  </Provider>
), document.getElementById('app'))
