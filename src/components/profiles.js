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
   fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users`).then((res) => {
     return res.json();
   }).then((json) => {
     // Set state to this json response you got back

     // find current user's ID from URL and his/her user object
     let currentUserId = this.props.userId;
     let currentUser = json.find((userObj) => {
       return userObj._id === currentUserId;
     });
     // find all user ids in the matches array for that user object (find user_ids for Adam's matches)
     let matchUserIds = currentUser.matches.map((eachMatch) => {return eachMatch.user_id});
     let currentuserremovedjson = json.filter((user)=>{
       return user!==currentUser
     })

     // Filter through all users (json) and keep the ones in matchUserIds
     let allMatchesforoneUser = json.filter((user) => {
        return matchUserIds.indexOf(user._id) !== -1;
      })

     this.setState({
       allUsers: currentuserremovedjson,
       allMatches: allMatchesforoneUser
     })
   });
 }
 render(){
   let users = this.props.showMatches ? this.state.allMatches : this.state.allUsers;
   console.log("current user's matches",this.state.allMatches);
   if(this.props.showMatches && this.state.allMatches.length===0){
     return (
       <div>
         <h4 className="displayNull"> Sorry, no matches yet!</h4>
       </div>
     )
   }
   else{
     return ( 
      <div>
       {users.map(eachUser => {
             return (
                     <div id="user-box" key={eachUser._id} className="card" >
                       <img className="card-img-top user-pic" src={eachUser.image_url} alt="ProfilePic" />
                       <div className="card-body">
                         <h4 className="card-title">{eachUser.name}</h4>
                         <ul id="user-info">
                         <li> {eachUser.age}</li>
                         <li> {eachUser.gender}</li>
                         </ul>
                         <a href={`/home/${eachUser._id}`} className="btn btn-primary profile_button">Go to profile</a>
                       </div>
                     </div>
         )})}
      </div>
   );
   }
 }
}
export default Profiles;
