import React, {Component} from 'react'
import SignUp from './SignUp';

class Splash extends Component{
  render(){
    return (
      <div>
        <div id="signUp">
          <SignUp/>
        </div>
        <img id="splash-pic" src={require('../images/heart-tree.jpeg')}  alt="heart-tree"/>
      </div>
    )
  }
}

export default Splash
