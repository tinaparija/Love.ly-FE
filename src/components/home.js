import React, {Component} from 'react';
import User from './user.js';
import Filters from './filters.js';
import Profiles from './profiles.js';

class Home extends Component{
  constructor(){
    super();
    this.state={
      matchesShown: false
    }
      this.displaymatches=this.displaymatches.bind(this);
      this.displayEveryone=this.displayEveryone.bind(this);
      this.deleteUser=this.deleteUser.bind(this);
  }
  displaymatches(){
    this.setState({
      matchesShown:true
    })
  }
  displayEveryone(){
    this.setState({
      matchesShown:false
    })
  }
  deleteUser(){
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/${this.props.match.params.user_id}`,
    {
      method: 'delete'
    }).then((response) => {
      console.log(response);
    });
    this.props.history.push('/');
  }

  render(){
    return (
      <div className="row">
          <div className="col col-md-2 left-column"> 
            <User user_id={this.props.match.params.user_id} onDeleteClick={this.deleteUser} />
          </div> 
          <div className="col-md-10 right-column">
            <div className="row">
              <Filters onClickSeeMatches={this.displaymatches} onClickSeeEveryone={this.displayEveryone} user_id={this.props.match.params.user_id}/>
            </div> 
            <div className="row">
              <div className="col col-md-12">
                <Profiles userId={this.props.match.params.user_id} showMatches={this.state.matchesShown }/>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Home
