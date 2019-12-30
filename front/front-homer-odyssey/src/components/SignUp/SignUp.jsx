import React, { Component } from "react";
import "./SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      passwordconf: "",
      name: "James",
      lastname: "Bond"
    };
  }

  updateField = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.state.password === this.state.passwordconf
      ? console.log(JSON.stringify(this.state, 1, 1))
      : console.log("passwords entered are different");
  };

  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Formulaire</legend>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={this.updateField}
            />

            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={this.updateField}
            />

            <input
              type="password"
              name="passwordconf"
              placeholder="confirm password"
              onChange={this.updateField}
            />

            <input
              type="name"
              name="name"
              placeholder="name"
              onChange={this.updateField}
            />

            <input
              type="lastname"
              name="lastname"
              placeholder="lastname"
              onChange={this.updateField}
            />
            <input type="submit" value="Submit" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default SignUp;
