import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  updateEmailField = event => this.setState({ email: event.target.value });

  render() {
    return (
      <div>
        <h1>
          <h1>{this.state.email}</h1>
        </h1>
        <input
          type="email"
          name="email"
          placeholder="enter your email here"
          onChange={event => this.updateEmailField(event)}
        />
      </div>
    );
  }
}

export default SignUp;
