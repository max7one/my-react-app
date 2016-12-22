import React, { Component } from 'react';
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div>
          Hello, React!
          <ul role="nav">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/repos">Repos</Link></li>
              <li><Link to="/redux">Redux Demo</Link></li>
          </ul>
      </div>
    );
  }
}
