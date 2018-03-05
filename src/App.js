import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import MyRoutes from './config/routes.js';

class App extends Component {
  render() {
    return (
      <div> 
          <div className = "header">
            <h3 id="logo">Love.ly</h3> 
          </div> 
          <div>
            { MyRoutes }
          </div>
      </div> 
   )
  }
}

export default App;
