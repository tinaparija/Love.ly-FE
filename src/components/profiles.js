import React, {Component} from 'react';

class Profiles extends Component{
  constructor() {
    super();
    this.state = {
      allUsers: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:8080/api/users').then((res) => {
      return res.json();
    }).then((json) => {
      // Set state to this json response you got back
      this.setState({allUsers: json})
    });
  }
  render(){
    return ( <div>
      {this.state.allUsers.map(eachUser => {
            return (
                    <div id="user-box" key={eachUser._id} className="card" >
                      <img className="card-img-top user-pic" src={eachUser.image_url} alt="Profile Picture" />
                      <div className="card-body">
                        <h4 className="card-title">{eachUser.name}</h4>
                        <ul id="user-info">
                        <li>{eachUser.age}</li>
                        <li>{eachUser.gender}</li>
                        <li className="card-text">{eachUser.description}</li>
                        <li>{eachUser.location}</li>
                        </ul>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>

        )})}
    </div>
  );
  }
}

export default Profiles;

{/* <div  id="user-box" key={eachUser._id}>
<img id="user-pic" src={eachUser.image_url}/>
   <ul id="user-info">
     <h4>{eachUser.name}</h4>
     <li>{eachUser.age}</li>
     <li>{eachUser.gender}</li>
     <li>{eachUser.description}</li>
     <li>{eachUser.location}</li>
   </ul>
 </div>); */}
