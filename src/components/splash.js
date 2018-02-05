import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Splash extends Component{
  render(){
    return (
      <div>App
        <Link to="/home">To Home</Link>
        <img id="splash-pic" src={require('../images/heart-tree.jpeg')}  alt="heart-tree"/>
      </div>
    )
  }
}

export default Splash
