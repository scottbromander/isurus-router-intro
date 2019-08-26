import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import Animals from '../Animals/Animals.js'
import Plants from '../Plants/Plants.js'
import Home from '../Home/Home.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/plants">Plants</Link>
            </li>
            <li>
              <Link to="/animals">Animals</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/plants" component={Plants} />
          <Route path="/animals" component={Animals} />
        </div>
      </Router>
    );
  }
}

export default App;
