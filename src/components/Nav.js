import React, {Component} from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  nextIndex,
  onNext
} from "../redux/actions";

class Nav extends Component {
  state = {
    home: false,
    stats: false,
    login: false,
    signup: false,
    profile: false,
    about: false,
    privacy: false,
    help: false
  };

  toggleClass = () => {
    const currentHome = this.state.home;
    const currentStats = this.state.stats;
    const currentLogin = this.state.login;
    const currentSignup = this.state.signup;
    const currentProfile = this.state.profile;
    const currentAbout = this.state.about;
    const currentPrivacy = this.state.privacy;
    const currentHelp = this.state.help;
    this.setState({
      home: !currentHome,
      stats: !currentStats,
      login: !currentLogin,
      signup: !currentSignup,
      profile: !currentProfile,
      about: !currentAbout,
      privacy: !currentPrivacy,
      help: !currentHelp
    });
  };

  homeRefresh = () => {
    this.props.nextIndex();
    if (!!document.getElementById("input")) {
      document.getElementById("input").value = "";
      document.getElementById("input").focus();
    };
    this.props.onNext();
  }

  home = (<NavLink className="navlink" exact to="/" onClick={this.homeRefresh}>home</NavLink>);
  stats = (<NavLink className="navlink" exact to="/stats">stats</NavLink>);
  login = (<NavLink className="navlink" exact to="/login">login</NavLink>);
  signup = (<NavLink className="navlink" exact to="/signup">signup</NavLink>);
  profile = (<NavLink className="navlink" exact to="/profile">profile</NavLink>);
  // contact = (<NavLink className="navlink" exact to="/">contact</NavLink>);
  about = (<NavLink className="navlink" exact to="/about">about</NavLink>);
  privacy = (<NavLink className="navlink" exact to="/privacy">privacy</NavLink>);
  help = (<NavLink className="navlink" exact to="/help">help</NavLink>);

  render() {
    return (
      <div className="navbar">
        {this.home}
        {this.stats}
        {this.props.loggedIn ? null : this.login}
        {this.props.loggedIn ? null : this.signup}
        {this.props.loggedIn? this.profile : null}
        {/* {this.props.loggedIn ? this.logoutButton : null} */}
        {this.about}
        {this.privacy}
        {this.help}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.user.id > 0 ? true : false
  };
};

const mapDispatchToProps = dispatch => {
  return {
    nextIndex: () => dispatch(nextIndex()),
    onNext: () => dispatch(onNext())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);