import React, {Component} from 'react';
import Test from './test';

class Filters extends Component{
  render(){
    return (
      <div id="filters" className="row">
        <button className="btn btn-primary filter" onClick={this.props.onClickSeeEveryone}>See Everyone</button>


        <button className="btn btn-danger filter" data-toggle="modal" data-target="#testModal">Take our Love Test</button>

        <div className="modal fade" id="testModal" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              {/* <div className="modal-header"> */}
                {/* <h5>header</h5> */}
                  <div class="modal-body">
                    {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close"> */}
                      {/* <span aria-hidden="true">&times;</span> */}
                    {/* </button> */}
                    <Test/>
                  </div>
                  {/* <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div> */}
              </div>
            </div>
          </div>
        {/* </div> */}




        {/* <button className="btn btn-danger filter" src="">Take our Love Test</button> */}
        <button onClick={this.props.onClickSeeMatches} className="btn btn-info filter">See your Love Matches</button>
      </div>
    )
  }
}

export default Filters
