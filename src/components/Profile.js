import React, { Component } from "react";
import { connect } from "react-redux";
import { URL_PROFILE, MODAL_STYLE } from "../constants/constants.js";
import { fetchCurrentUser, updateUser } from "../redux/actions";
import { Redirect } from "react-router-dom";
import ReactModal from "react-modal";

class Profile extends Component {
  state = {
    username: this.props.user.username,
    email: this.props.user.email,
    password: "",
    newPassword: "",
    redirect: false,
    showConfirmModal: false,
  };

  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEditProfileSubmit = (e) => {
    e.preventDefault();
    fetch(URL_PROFILE, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authentication: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        newPassword: this.state.newPassword,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        this.props.updateUser(user);
        this.setState({ password: "", newPassword: "" });
        alert("profile updated!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleDelete = (e) => {
    e.preventDefault();
    fetch(URL_PROFILE, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authentication: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.props.updateUser({ user: null });
        localStorage.clear();
        this.setState({ redirect: true });
        alert("profile deleted. bye!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleLogout = (e) => {
    e.preventDefault();
    this.props.updateUser({ user: null });
    localStorage.clear();
    this.setState({ redirect: true });
  };

  toggleConfirmModal = () => {
    this.setState({ showConfirmModal: !this.state.showConfirmModal });
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
            <div className="form-label">current password:</div>
            <div className="form-label">new password:</div>
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
            ></input>
            <br />
            <input
              className="form-input"
              id="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            ></input>
            <br />
            <input
              type="password"
              className="form-input"
              id="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            ></input>
            <br />
            <input
              type="password"
              className="form-input"
              id="new-password"
              name="newPassword"
              onChange={this.handleChange}
              value={this.state.newPassword}
            ></input>
            <br />
            <button type="submit" className="btn stacked">
              save edits
            </button>
            <br />
            <button
              type="button"
              className="btn stacked"
              onClick={this.handleLogout}
            >
              logout
            </button>
            <br />
            <button
              type="button"
              className="btn stacked"
              onClick={this.toggleConfirmModal}
            >
              delete profile
            </button>
          </form>
        </div>
        <ReactModal
          isOpen={this.state.showConfirmModal}
          onRequestClose={this.toggleConfirmModal}
          contentLabel="Confirm Delete Modal"
          ariaHideApp={false}
          style={MODAL_STYLE}
        >
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={this.toggleConfirmModal}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="confirm">
            <div className="confirm-preface">
              sure you want to delete your profile?
            </div>
            <button className="btn" onClick={this.handleDelete}>
              confirm delete
            </button>
            <button className="btn" onClick={this.toggleConfirmModal}>
              nevermind
            </button>
          </div>
        </ReactModal>
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
    fetchCurrentUser: (user) => {
      dispatch(fetchCurrentUser(user));
    },
    updateUser: (user) => {
      dispatch(updateUser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
