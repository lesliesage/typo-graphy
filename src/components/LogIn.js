import React, { Component } from "react";
import { connect } from "react-redux";
import { URL_LOGIN, URL_FORGOT } from "../constants/constants.js";
import { updateUser } from "../redux/actions";
import { Redirect } from "react-router-dom";

class LogIn extends Component {
  state = { email: "", password: "", redirect: false };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = (e) => {
    e.preventDefault();
    fetch(URL_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.jwt) {
          this.setState({ redirect: true });
          localStorage.setItem("token", data.jwt);
          this.props.updateUser(JSON.parse(data.user));
        } else {
          alert("incorrect email or password");
        }
      });
  };

  handleForgot = (e) => {
    e.preventDefault();
    fetch(URL_FORGOT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "ok") {
          alert("reset link has been emailed.");
        } else {
          alert("email not found.");
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
            <div className="form-label">email:</div>
            <div className="form-label">password:</div>
          </div>
          <form
            className="form-inputs-container"
            onSubmit={this.handleLoginSubmit}
          >
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
            <button type="submit" className="btn stacked">
              log in
            </button>
            <br />
          </form>
        </div>
        <button
          onClick={this.handleForgot}
          className="btn stacked outside-form"
        >
          forgot password
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {
      dispatch(updateUser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
