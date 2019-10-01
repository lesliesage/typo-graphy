import React, { Component } from "react";
import { connect } from "react-redux";
import { URL_SIGNUP } from "../constants/constants.js";
import { updateUser } from "../redux/actions";

class SignUp extends Component {
  state = { username: "", email: "", password: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitSignUp = e => {
    e.preventDefault();
    fetch(URL_SIGNUP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.jwt) {
          localStorage.setItem("token", data.jwt);
          this.props.updateUser(JSON.parse(data.user));
        } else {
          alert("invalid signup");
        }
      });
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
          </div>
          <form
            className="form-inputs-container"
            onSubmit={this.handleSubmitSignUp}
          >
            <input
              className="form-input"
              id="username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
              placeholder="username"
            ></input>
            <br />
            <input
              className="form-input"
              id="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              placeholder="email"
            ></input>
            <br />
            <input
              type="password"
              className="form-input"
              id="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              placeholder="password"
            ></input>
            <br />
            <button type="submit" className="btn">
              sign up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => {
      dispatch(updateUser(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
