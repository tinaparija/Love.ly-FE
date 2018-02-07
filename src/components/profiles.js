import React, {Component} from 'react';

class Profiles extends Component{
 constructor() {
   super();

   this.state = {
     allUsers: [],
     allMatches: []
   }
 }
 componentDidMount() {
   fetch('http://localhost:8080/api/users').then((res) => {
     return res.json();
   }).then((json) => {
     // Set state to this json response you got back
     this.setState({allUsers: json})
     console.log(json);
   });
 }
 render(){
   let users = this.props.showMatches ? this.state.allMatches : this.state.allUsers;

   return ( <div>
     {users.map(eachUser => {
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
export default Profiles;
