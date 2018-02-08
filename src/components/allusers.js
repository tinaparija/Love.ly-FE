import React, {Component} from 'react';

class AllUsers extends Component{
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
  // do stuff with the JSON you get back here
  console.log(json);
  this.setState({
    allUsers:json
  })
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
                      <a href={`home/${eachUser._id}`} className="btn btn-primary">Go to profile</a>
                    </div>
                  </div>

      )})}
  </div>
);
}
}
export default AllUsers;
