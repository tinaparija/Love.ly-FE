import React, {Component} from 'react';

class User extends Component{
  constructor() {
    super();
    this.state = {
      oneUser: {}
    }
  }
  componentDidMount() {
    let idOfOneUser = this.props._id;  /* this._id */
      fetch('http://localhost:8080/api/users/' + idOfOneUser )
        .then(res => res.json())
        .then(json => {
          this.setState({oneUser: json});
        });
  }

  render(){
    return (
      <div id="user" className="col-5 left-column">
        <img id="user-pic" alt="profile image" src={this.state.oneUser.image_url} />
        <ul id="user-info">
          <h4>{this.state.oneUser.name}</h4>
          <li>{this.state.oneUser.age}</li>
          <li>{this.state.oneUser.gender}</li>
          <li>{this.state.oneUser.description}</li>
          <li>{this.state.oneUser.location}</li>
        </ul>
      </div>
    )
  }
}

export default User
