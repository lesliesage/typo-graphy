import React, { Component } from "react";
import { connect } from "react-redux";
import { URL_LOGIN } from "../constants/constants.js";
import { fetchCurrentUser, updateUser } from "../redux/actions";
import { Redirect } from "react-router-dom";

class Profile extends Component {
  state = { username: "", email: "", password: "", redirect: false };

  componentDidMount() {
    this.props.fetchCurrentUser();
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
        Accept: "application/json",
        Authentication: `Bearer ${localStorage.getItem("token")}` // ?
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
        } else {
          alert("incorrect username or password");
        }
      });
  };

  handleDelete = e => {
    e.preventDefault();
    fetch(URL_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authentication: `Bearer ${localStorage.getItem("token")}` // ?
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
        } else {
          alert("incorrect username or password");
        }
      });
  };

  handleLogout = e => {
    e.preventDefault();
    this.props.updateUser({user: null})
    localStorage.clear(); // is this the best way to log out?
    this.setState({ redirect: true });
  };

  render() {
    return this.state.redirect ? (
      <Redirect to="/login" />
    ) : (
      <div className="main info-pg profile">
        <h1>profile</h1>
        <div className="form-container">
          <div className="form-labels-container">
            <div className="form-label">edit username:</div>
            <div className="form-label">edit email:</div>
            <div className="form-label">change password:</div>
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
              placeholder={this.props.user.username}
            ></input>
            <br />
            <input
              className="form-input"
              id="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              placeholder={this.props.user.email}
            ></input>
            <br />
            <input
              type="password"
              className="form-input"
              id="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              placeholder="new password"
            ></input>
            <br />
            <button type="submit" className="btn">
              save edits
            </button>
            <br />
            <button className="btn" onClick={this.handleLogout}>
              logout
            </button>
            <br />
            <button className="btn" onClick={this.handleDelete}>
              delete profile
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
