import React, {Component} from 'react';

class Dropdown extends Component{
  constructor(){
    super();
  }
  render(){
    console.log(this.props.alreadySelected)
    return (
      <select onChange={ this.props.onChange }>
        <option value="" disabled selected>Select your option</option>
        { this.props.options.map(option => {
          return <option disabled={ this.props.alreadySelected.indexOf(option.toString()) !== -1 } value={ option }>{ option }</option>
        }) }
      </select>
    )
  }
}

export default Dropdown;
