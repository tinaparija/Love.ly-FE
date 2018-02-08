import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class SignUp extends Component {
  constructor() {
    super();
		this.state = {
			name: '',
			image_url: '',
      gender: '',
      age: '',
      description:'',
      location: ''
		}
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    // var _this = this;
    fetch('http://localhost:8080/api/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        age: this.state.age,
        location: this.state.location,
        image_url: this.state.image_url,
        gender: this.state.gender,
        description: this.state.description
        })
      }).then((res) => {
        return res.json()
      }).then((json) => {
        this.props.history.push('/profiles');
      })
    }

  render() {

    return(
      <form>
        <br />
        <h3>Sign Up To Find Your Match!</h3>
        <input placeholder= 'Username'
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value})}
        />
        <br />
        <input placeholder= 'Pic URL'
          value={this.state.image_url}
          onChange={e => this.setState({ image_url: e.target.value})}
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
        <input placeholder= 'Describe yourself'
          value={this.state.description}
          onChange={e => this.setState({ description: e.target.value})}
        />
        <br />
        <input placeholder= 'Location'
          value={this.state.location}
          onChange={e => this.setState({ location: e.target.value})}
        />
        <br />
        <button className="btn btn-primary" onClick={e => this.onSubmit(e)}>Submit</button>
      </form>

    );
  }

}

export default withRouter(SignUp);
