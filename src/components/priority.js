import React, {Component} from 'react';

class Priority extends Component {
  constructor() {
    super();
		this.state = {
			humor: '',
			intellegence: '',
      empathy: '',
      materialistic: '',
      physicalNeeds: ''
		}
    this.onSubmit = this.onSubmit.bind(this)
    }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      empathy: '',
			humor: '',
      intellegence: '',
      materialism: '',
      physicalNeeds: ''
		})
  };

  render() {
    return(
      <form>
        <br />
        <h3> Rank Your Priorities From From 1 - 5 </h3>
        <br />
        <input type="number" placeholder= 'Humor'
          value={this.state.humor}
          onChange={e => this.setState({ humor: e.target.value})}
        />
        <br />
        <input placeholder= 'Intellegence'
          value={this.state.intellegence}
          onChange={e => this.setState({ intellegence: e.target.value})}
        />
        <br />
        <input placeholder= 'Empathy'
          value={this.state.empathy}
          onChange={e => this.setState({ empathy: e.target.value})}
        />
        <br />
        <input placeholder= 'Materialistic'
          value={this.state.materialistic}
          onChange={e => this.setState({ materialistic: e.target.value})}
        />
        <br />
        <input placeholder= 'Physical Needs'
          value={this.state.physicalNeeds}
          onChange={e => this.setState({ physicalNeeds: e.target.value})}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>

    );
  }

}

export default Priority;
