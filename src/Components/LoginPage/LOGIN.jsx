import React, { Component } from "react";
import SignUP from "../SignUpPage/SignUpCompo";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      loginMessage: "",
      isLoggedIn: false, // Add isLoggedIn to track login status
      navigateTo: "", // For navigation to SignUP component
    };

    this.handleChange = this.handleChange.bind(this);
    this.navigateToSignUp = this.navigateToSignUp.bind(this); // Bind the function
  }

  handleChange() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // Get the current date
    const currentDate = new Date().toLocaleDateString();

    // Update the state with login details and message
    this.setState({
      username: user,
      password: pass,
      loginMessage: `Hello, ${user} you logged in on ${currentDate}`,
      isLoggedIn: true, // Set isLoggedIn to true after login
    });
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
        <div className="in-put">
          <label>Email</label>
          <input id="username" type="email" />
        </div>
        <div className="in-put">
          <label>Password</label>
          <input id="password" type="password" />
        </div>
        <button onClick={this.handleChange}>Login</button>
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
