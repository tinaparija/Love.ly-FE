import React, {Component} from 'react';
import User from './user.js';
import Title from './title.js';
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
  render(){
    console.log(this.props);
    return (
      <div className="App">
        <div className="row">
          <User user_id={this.props.match.params.user_id} />
          <div className="col-7 right-column">
            <Title/>
            <Filters onClickSeeMatches={this.displaymatches} onClickSeeEveryone={this.displayEveryone} user_id={this.props.match.params.user_id}/>
          </div>
        </div>
        <div>
          <Profiles userId={ this.props.match.params.user_id } showMatches={ this.state.matchesShown }/>
        </div>
      </div>
    )
  }
}

export default Home
