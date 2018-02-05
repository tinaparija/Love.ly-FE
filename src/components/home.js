import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import User from './user.js';
import Title from './title.js';

class Home extends Component{
  render(){
    return (
      <div className="App">
        {/* <header className="App-header">
        </header> */}

        <div className="row">
          <div id="user" className="col-5 left-column">
            <User/>
          </div>

          <div className="col-7 right-column">
            <Title/>
            <div id="filters" className="row">
              <button className="btn btn-primary filter">See Everyone</button>
              <button className="btn btn-danger filter">Take our Love Test</button>
              <button className="btn btn-info filter">See your Love Matches</button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Home
