import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Profiles extends Component{
  constructor() {
    super();
		this.state = {
			profiles: []
		}
    }

   componentWillMount(){
   	 fetch('http://localhost:8080/api/users').then((res) => {
  		return res.json();

		}).then((json) => {
		console.log(json);
	  	this.setState({
	  		profiles: json
	  	})
	});
   }

  render(){

    return (
      <div>
      	{this.state.profiles.map ( each_profile => {
      		return(<p>{each_profile.name}</p>)
      	})}
      </div>
    )
  }
}

export default Profiles
