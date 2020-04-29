import React, { Component } from "react";
import { connect } from "react-redux";
import { URL_LOGIN } from "../constants/constants.js";
import { updateUser } from "../redux/actions";
import { Redirect } from "react-router-dom";

class LogIn extends Component {
  state = { username: "", password: "", redirect: false };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    fetch(URL_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.jwt) {
          localStorage.setItem("token", data.jwt);
          this.props.updateUser(JSON.parse(data.user));
          this.setState({ redirect: true });
        } else {
          alert("incorrect username or password");
        }
      });
  };

  render() {
    return this.state.redirect ? (
      <Redirect to="/" />
    ) : (
      <div className="main info-pg login">
        <h1>login</h1>
        <div className="form-container">
          <div className="form-labels-container">
            <div className="form-label">username:</div>
            <div className="form-label">password:</div>
          </div>
          <form
            className="form-inputs-container"
            onSubmit={this.handleLoginSubmit}
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
              log in
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
)(LogIn);