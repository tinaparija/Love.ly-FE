import React, {Component} from 'react';
import User from './user.js';
import Title from './title.js';
import Filters from './filters.js';
import Profiles from './profiles.js';

class Home extends Component{
  render(){
    return (
      <div className="App">
        {/* <header className="App-header">
        </header> */}
        <div className="row">
            <User _id={this.props.match.params.user_id} />

          <div className="col-7 right-column">
            <Title/>
            <Filters/>
          </div>
        </div>
        <div>
          <Profiles/>
        </div>
      </div>
    )
  }
}

export default Home
