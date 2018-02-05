import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import MyRoutes from './config/routes.js';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <header>
          <h3 id="header" className="App-title">What if life was.. <strong>Love.ly</strong></h3>
        </header>
        { MyRoutes }
        <footer>
          <h1 id="footer">Footer</h1>
        </footer>
      </div>
   )
  }
}

export default App;
