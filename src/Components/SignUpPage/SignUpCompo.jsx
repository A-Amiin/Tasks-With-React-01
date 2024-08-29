import React, { Component } from "react";
import "./Signup.css";
import Login from "../LoginPage/LOGIN";

class SignUP extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      isSignedUp: false,
      navigateTo: "",
      currentDate: "",
    };

    this.handleChange = this.handleChange.bind(this); // Bind the handleChange method
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToLogin = this.navigateToLogin.bind(this); // Bind the function
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    this.setState(
      {
        isSignedUp: true, // Trigger the layout change
        currentDate: new Date().toLocaleDateString(),
      },
      // () => {
      //   console.log("Updated State:", this.state);
      // }                                                          it's for testing
    );
  }

  navigateToLogin() {
    this.setState({ navigateTo: "login" }); // Set navigateTo to 'login' when the link is clicked
  }

  render() {
    if (this.state.navigateTo === "login") {
      return <Login />;
    }

    if (this.state.isSignedUp) {
      return (
        <div className="card">
          <h1>
            Hello, {this.state.firstName} {this.state.lastName}
          </h1>
          <p>Your Email is {this.state.email}</p>
          <p>Your subscription is started from {this.state.currentDate}.</p>
        </div>
      );
    }

    return (
      <div className="card">
        <h1>Sign Up Page</h1>
        <h3>Don't have an account? Sign up below:</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="in-put">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="in-put">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div className="in-put">
            <label>Phone</label>
            <input
              type="number"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="in-put">
            <label>E-Mail</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
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
          <div className="in-put">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">
            Sign UP
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <a href="#" onClick={this.navigateToLogin}>
            LogIn
          </a>
        </p>
      </div>
    );
  }
}

export default SignUP;

