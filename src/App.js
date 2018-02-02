import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyRoutes from './config/routes.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img src={logo} className="App-logo" alt="Love.ly" />
          <h1 className="App-title">Love.ly</h1>
        </header>

        <div class="row">
          <div class="col-4">

          </div>

          <div>

          </div>
        </div>

        { MyRoutes }

      </div>
    );
  }
}

export default App;
