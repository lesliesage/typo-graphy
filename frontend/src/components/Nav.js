
import React, {Component} from "react";
import { withRouter, NavLink } from "react-router-dom";

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

  homeButton = (<NavLink className="btn" exact to="/">typo-graphy</NavLink>);
  statsButton = (<NavLink className="btn" exact to="/stats">stats</NavLink>);
  loginButton = (<NavLink className="btn" exact to="/">login</NavLink>);
  signupButton = (<NavLink className="btn" exact to="/">signup</NavLink>);
  // contactButton = (<NavLink className="btn" exact to="/">contact</NavLink>);
  aboutButton = (<NavLink className="btn" exact to="/about">about</NavLink>);
  privacyButton = (<NavLink className="btn" exact to="/privacy">privacy</NavLink>);
  helpButton = (<NavLink className="btn" exact to="/help">help</NavLink>);


  render() {
    return (
      <div id="navbar">
        {this.homeButton}
        {this.statsButton}
        {this.props.user ? null : this.loginButton}
        {this.props.user ? null : this.signupButton}
        {/* {this.props.user ? this.logoutButton : null} */}
        {this.aboutButton}
        {this.privacyButton}
        {this.helpButton}
      </div>
    );
  }
}

// const Nav = () => {
//   return (
//     <div>
//       <a href="/">
//         <button className="btn"></button>
//       </a>
//       <a href="/stats">
//         <button className="btn">stats</button>
//       </a>
//       <button className="btn">login</button>
//       <button className="btn">signup</button>
//       <a href="/contact"><button className="btn">contact</button></a>
//       <a href="/about">
//         <button className="btn">about</button>
//       </a>
//       <a href="/privacy">
//         <button className="btn">privacy policy</button>
//       </a>
//       <a href="/help">
//         <button className="btn">help</button>
//       </a>
//     </div>
//   );
// };

export default withRouter(Nav);
