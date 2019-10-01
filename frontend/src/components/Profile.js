import React, { Component } from "react";
import { connect } from "react-redux";
import { URL_LOGIN } from "../constants/constants.js";
import { fetchCurrentUser, updateUser } from "../redux/actions";

class Profile extends Component {
  state = { username: "", password: "" };

  componentDidMount(){
    this.props.fetchCurrentUser()
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEditProfileSubmit = e => {
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
        if (data.authenticated) {
          localStorage.setItem("token", data.token);
          this.props.updateUser(data.user);
        } else {
          alert("incorrect username or password");
        }
      });
  };

  render() {
    return (
      <div className="main info-pg profile">
        <h1>profile</h1>
        <div className="form-container">
          <div className="form-labels-container">
            <div className="form-label">username:</div>
            <div className="form-label">password:</div>
          </div>
          <form
            className="form-inputs-container"
            onSubmit={this.handleEditProfileSubmit}
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
              edit profile
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: user => {
      dispatch(fetchCurrentUser(user));
    },
    updateUser: user => {
      dispatch(updateUser(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
