import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Title extends Component{
  render(){
    return (
      <div id="title" className="row">
        {/* <img src={logo} className="App-logo" alt="Love.ly" /> */}
        <img id="logo" /*className="App-logo"*/ src={require('../images/heart-flame.jpeg')} />
        <h1 className="App-title"><strong>Love.ly</strong></h1>
      </div>
    )
  }
}

export default Title
