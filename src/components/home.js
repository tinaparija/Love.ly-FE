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
  }
  displaymatches(){
    this.setState({
      matchesShown:true
    })
  }
  render(){
    return (
      <div className="App">
        <div className="row">
          <User _id={this.props.match.params.user_id} />
          <div className="col-7 right-column">
            <Title/>
            <Filters onclickmatches={this.displaymatches}/>
          </div>
        </div>
        <div>
          <Profiles showMatches={ this.state.matchesShown }/>
        </div>
      </div>
    )
  }
}

export default Home
