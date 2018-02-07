import React, {Component} from 'react';

class SignUp extends Component {
  constructor() {
    super();
		this.state = {
			usersName: '',
			picture: '',
      gender: '',
      age: '',
      location: ''
		}
    this.onSubmit = this.onSubmit.bind(this)
    }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
			usersName: '',
			picture: '',
      gender: '',
      age: '',
      location: ''
		})
  };

  render() {
    return(
      <form>
        <br />
        <h3>Sign Up To Find Your Match!</h3>
        <input placeholder= 'Username'
          value={this.state.usersName}
          onChange={e => this.setState({ usersName: e.target.value})}
        />
        <br />
        <input placeholder= 'Pic URL'
          value={this.state.picture}
          onChange={e => this.setState({ picture: e.target.value})}
        />
        <br />
        <input placeholder= 'Gender'
          value={this.state.gender}
          onChange={e => this.setState({ gender: e.target.value})}
        />
        <br />
        <input placeholder= 'Age'
          value={this.state.age}
          onChange={e => this.setState({ age: e.target.value})}
        />
        <br />
        <input placeholder= 'Location'
          value={this.state.location}
          onChange={e => this.setState({ location: e.target.value})}
        />
        <br />
        <button className="" onClick={e => this.onSubmit(e)}>Submit</button>
      </form>

    );
  }

}

export default SignUp;
