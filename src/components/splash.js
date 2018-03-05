import React, {Component} from 'react'
import SignUp from './SignUp';

class Splash extends Component{
  render(){
    return (
      <div> 
        <div className="row">
          <div id="signUp" className="col col-md-4 offset-md-1">
            <SignUp/>
          </div>
          <div className="col col-md-4">
          <img src="/images/heart.jpg" id="heart" height="320" width="340"/>
          </div>
        </div>
        <div className="row footer">
        </div> 
      </div> 
    )
  }
}

export default Splash
