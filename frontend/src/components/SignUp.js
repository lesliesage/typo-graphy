import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SignUp extends Component {
  state = { email: "", password: "" };

  submitSignUp = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="main info-pg signup">
        <h1>signup</h1>
        <div className="form-container">
          <div className="form-labels-container">
            <div className="form-label">username:</div>
            <div className="form-label">email:</div>
            <div className="form-label">password:</div>
            <div className="form-label">confirm password:</div>
          </div>
          <form className="form-inputs-container">
            <input className="form-input" id="username"></input>
            <br />
            <input className="form-input" id="email"></input>
            <br />
            <input className="form-input" id="password"></input>
            <br />
            <input className="form-input" id="confirm"></input>
          </form>
        </div>
        <button onClick={e => this.submitSignUp} className="btn">
          sign up
        </button>
      </div>
    );
  }
}

export default withRouter(SignUp);
