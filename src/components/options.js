import React, {Component} from 'react';

class Options extends Component{
  constructor(){
    super();
    this.state={
      arr:[]
    }
    this.addscore=this.addscore.bind(this);
  }
  addscore(e){
    this.setState({
      arr: this.state.arr.concat(e.target.value)
    })
    alert(this.state.arr);
  }
  render(){
    return (
      <ul class='likert'>
        <li>
          <input type="checkbox" name="likert" value=" 5 "   onChange={ this.addscore }/>
          <label>Strongly agree</label>
        </li>
        <li>
          <input type="checkbox" name="likert" value=" 4 "  onChange={ this.addscore }/>
          <label>Agree</label>
        </li>
        <li>
          <input type="checkbox" name="likert" value=" 3 "  onChange={ this.addscore }/>
          <label>Neutral</label>
        </li>
        <li>
          <input type="checkbox" name="likert" value=" 2 "  onChange={ this.addscore }/>
          <label>Disagree</label>
        </li>
        <li>
          <input type="checkbox" name="likert" value=" 1 "  onChange={ this.addscore }/>
          <label>Strongly disagree</label>
        </li>
      </ul>
    )
  }
}
export default Options;
