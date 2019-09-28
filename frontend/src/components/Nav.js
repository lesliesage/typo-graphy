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
    about: false,
    privacy: false,
    help: false
  };

  toggleClass = () => {
    const currentHome = this.state.home;
    const currentStats = this.state.stats;
    const currentLogin = this.state.login;
    const currentSignup = this.state.signup;
    const currentAbout = this.state.about;
    const currentPrivacy = this.state.privacy;
    const currentHelp = this.state.help;
    this.setState({
      home: !currentHome,
      stats: !currentStats,
      login: !currentLogin,
      signup: !currentSignup,
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
  // contact = (<NavLink className="navlink" exact to="/">contact</NavLink>);
  about = (<NavLink className="navlink" exact to="/about">about</NavLink>);
  privacy = (<NavLink className="navlink" exact to="/privacy">privacy</NavLink>);
  help = (<NavLink className="navlink" exact to="/help">help</NavLink>);

  render() {
    return (
      <div className="navbar">
        {this.home}
        {this.stats}
        {this.props.user ? null : this.login}
        {this.props.user ? null : this.signup}
        {/* {this.props.user ? this.logoutButton : null} */}
        {this.about}
        {this.privacy}
        {this.help}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    nextIndex: () => dispatch(nextIndex()),
    onNext: () => dispatch(onNext())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Nav);