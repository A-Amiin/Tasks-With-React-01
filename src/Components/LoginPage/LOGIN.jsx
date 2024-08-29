import React, { Component } from "react";
import SignUP from "../SignUpPage/SignUpCompo";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      loginMessage: "",
      isLoggedIn: false,
      navigateTo: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSignUp = this.navigateToSignUp.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const currentDate = new Date().toLocaleDateString();
    this.setState(
      {
        loginMessage: `Hello, ${this.state.username}, you logged in on ${currentDate}`,
        isLoggedIn: true,
      },
      () => {
        console.log("Updated State:", this.state);
      }
    );
  }

  navigateToSignUp() {
    this.setState({ navigateTo: "signup" }); // Set navigateTo to 'signup' when the link is clicked
  }

  render() {
    if (this.state.navigateTo === "signup") {
      return <SignUP />; // Render the SignUP component
    }

    if (this.state.isLoggedIn) {
      return (
        <div className="card">
          <h1>{this.state.loginMessage}</h1>
        </div>
      );
    }

    return (
      <div className="card">
        <h1>LogIn</h1>
        <h3>Already have an account? Login below:</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="in-put">
            <label>Email</label>
            <input
              type="email"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="in-put">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          {" "}
          Don't have an account?{" "}
          <a href="#" onClick={this.navigateToSignUp}>
            {" "}
            Sign Up
          </a>
        </p>
      </div>
    );
  }
}

export default Login;
