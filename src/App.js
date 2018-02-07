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
        <header className="header-fullwidth">
          <div>
            <h3 id="header">What if life was..
                <img id="header-logo" src={require('./images/heart-flame.jpeg')}/>
                <strong>Love.ly</strong>
            </h3>
          </div>

        </header>
        { MyRoutes }
        <footer>
          <h1 id="footer">This could be it..
            <Link to={`/home/5a79e730299613054ffe0a28`}>Home</Link>
            <Link to={`/`}>Splash</Link>
          </h1>
        </footer>
      </div>
   )
  }
}

export default App;
