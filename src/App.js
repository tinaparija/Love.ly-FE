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
          <div>
            <h3 id="header" className="App-title">What if life was..
              <img id="header-logo" /*className="App-logo"*/ src={require('./images/heart-flame.jpeg')}/>
              <strong>Love.ly</strong>
            </h3>
          </div>

        </header>
        { MyRoutes }
        <footer>
          <h1 id="footer">This could be it..<Link to={`/home`}>Enter</Link></h1>
        </footer>
      </div>
   )
  }
}

export default App;
