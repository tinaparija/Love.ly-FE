import React, {Component} from 'react';
import Test from './test';

class Filters extends Component{
  render(){
    return (
      <div id="filters" className="row">
        <div className="col col-md-12"> 
          <button className="btn btn-primary filter" onClick={this.props.onClickSeeEveryone}>Everyone</button>
          <button className="btn btn-primary filter" data-toggle="modal" data-target="#testModal">Values Test</button>
          <div className="modal fade" id="testModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                    <div className="modal-body">
                      <Test user_id={this.props.user_id} />
                    </div>
              </div>
            </div>
          </div>
          <button onClick={this.props.onClickSeeMatches} className="btn btn-primary filter">Matches</button>
        </div>
      </div>
    )
  }
}

export default Filters
