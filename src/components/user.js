import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class User extends Component{
  render(){
    return (
      <div id="user" className="col-5 left-column">
        <img id="user-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8L7q2PON7BWq2XWsAdmCK8SivO6tpZF3Tvuqy60l7llP0Jsxg"/>
        <h4>Bobby Joe</h4>
        <ul id="user-info">
          <li>Location: San Francisco</li>
          <li>Enjoys: Adventure</li>
          <li>Priority: Humor</li>
          <li>Looking for: Intellect</li>
        </ul>
      </div>
    )
  }
}

export default User
