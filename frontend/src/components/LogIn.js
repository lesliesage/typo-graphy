import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class LogIn extends Component {
  state = { email: "", password: "" };

  submitLogIn = () => {
    // stuff
  };
  render() {
    return (
      <div className="main info-pg login">
        <h1>login</h1>
        <div className="form-container">
          <div className="form-labels-container">
            <div className="form-label">email:</div>
            <div className="form-label">password:</div>
          </div>
          <form className="form-inputs-container">
            <input className="form-input" id="email"></input>
            <br />
            <input className="form-input" id="password"></input>
            <br />
          </form>
        </div>
        <button onClick={e => this.submitSignUp} className="btn">
          sign up
        </button>
      </div>
    );
  }
}

export default withRouter(LogIn);
