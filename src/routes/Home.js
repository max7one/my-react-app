import React, { Component } from 'react';
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div>
          <h1>
            Hello, React!
          </h1>
          <br/>
          <br/>
          <br/>
          <ul role="nav">
              <li><h1><Link to="/new">New</Link></h1></li>
              <li><h1><Link to="/repos">Repos</Link></h1></li>
              <li><h1><Link to="/redux">Redux Demo</Link></h1></li>
              <li><h1><Link to="/todomvc">todoMVC</Link></h1></li>
          </ul>
      </div>
    );
  }
}
