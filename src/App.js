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
        <head>
          <meta name="viewport" content="width=device-width"/>
        </head>
        <header className="header-fullwidth">
          <div>
            <h2 id="header"><span className="moto">What if life was..</span>
              <img id="header-logo" src={require('./images/heart-flame.jpeg')}/>
              <strong>Love.ly</strong>
            </h2>

          </div>

        </header>
        { MyRoutes }
        <footer>
          <h1 id="footer"><span className="moto">This could be it..</span>
            <Link className="footer-nav" to={`/home/5a7a95731950583a243b8914`}>🏠Home</Link>
            <Link className="footer-nav" to={`/`}>❤️Sign Up</Link>
          </h1>
        </footer>
      </div>
   )
  }
}

export default App;
