import React, { Component } from "react";
import { connect } from "react-redux";
import { URL_RESET } from "../constants/constants.js";
import { updateUser } from "../redux/actions";
import { Redirect } from "react-router-dom";

class Reset extends Component {
  state = { email: "", password: "", redirect: false };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmitReset = (e) => {
    e.preventDefault();
    fetch(URL_RESET, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        code: this.props.location.search.slice(1),
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("token", data.jwt);
          this.props.updateUser(JSON.parse(data.user));
          this.setState({ redirect: true });
        } else {
          alert("invalid reset");
        }
      });
  };

  render() {
    return this.state.redirect ? (
      <Redirect to="/" />
    ) : (
      <div className="main info-pg reset">
        <h1>reset</h1>
        <div className="form-container">
          <div className="form-labels-container">
            <div className="form-label">email:</div>
            <div className="form-label">new password:</div>
          </div>
          <form
            className="form-inputs-container"
            onSubmit={this.handleSubmitReset}
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
            <button type="submit" className="btn">
              save
            </button>
          </form>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
