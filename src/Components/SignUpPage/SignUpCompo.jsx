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
      navigateTo: "", // Add navigateTo to manage navigation
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToLogin = this.navigateToLogin.bind(this); // Bind the function
  }

  handleSubmit() {
    // Get the values from the input fields
    const firstName = document.getElementById("first").value;
    const lastName = document.getElementById("last").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    // Update the state with the input values and set isSignedUp to true
    this.setState(
      {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        isSignedUp: true, // Trigger the layout change
        currentDate: new Date().toLocaleDateString(),
      },
      () => {
        console.log("Updated State:", this.state);
      }
    );
  }

  navigateToLogin() {
    this.setState({ navigateTo: "login" }); // Set navigateTo to 'login' when the link is clicked
  }

  render() {
    if (this.state.navigateTo === "login") {
      return <Login />; // Render the Login component
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
        <form>
          <div className="in-put">
            <label>First Name</label>
            <input type="text" id="first" />
          </div>
          <div className="in-put">
            <label>Last Name</label>
            <input type="text" id="last" />
          </div>
          <div className="in-put">
            <label>Phone</label>
            <input type="number" id="phone" />
          </div>
          <div className="in-put">
            <label>E-Mail</label>
            <input type="email" id="email" required />
          </div>
          <div className="in-put">
            <label>Password</label>
            <input type="password" id="password" />
          </div>
          <div className="in-put">
            <label>Confirm password</label>
            <input type="password" id="confirmPassword" />
          </div>
          <button type="button" onClick={this.handleSubmit}>
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
