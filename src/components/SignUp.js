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
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users`, {
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
      <div className="col col-md-12"> 
        <form id="signup_form">
          <h4 id="signup_heading"> Match your values today!</h4> 
          <div className="form-group"> 
          <label>Username </label>
          <input 
            type="text" className="form-control" 
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value})}
          />
          </div>

          <div className="form-group"> 
          <label>Pic URL</label>
          <input 
            type="text" className="form-control" 
            value={this.state.image_url}
            onChange={e => this.setState({ image_url: e.target.value})}
          />
          </div> 

          <div className="form-group"> 
          <label>Gender</label>
          <input 
            type="text" className="form-control" 
            value={this.state.gender}
            onChange={e => this.setState({ gender: e.target.value})}
          />
          </div> 

          <div className="form-group"> 
          <label>Age</label>
          <input 
            type="text" className="form-control"
            value={this.state.age}
            onChange={e => this.setState({ age: e.target.value})}
          />
          </div> 

          <button className="btn btn-primary" id="signup_button" onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  }

}

export default withRouter(SignUp);
