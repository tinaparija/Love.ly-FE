import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Filters extends Component{
  render(){
    return (
      <div id="filters" className="row">
        <button className="btn btn-primary filter">See Everyone</button>
        <button className="btn btn-danger filter" src="">Take our Love Test</button>
        <button className="btn btn-info filter">See your Love Matches</button>
      </div>
    )
  }
}

export default Filters
