import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class LogIn extends Component {
  state = { email: "", password: "" };

  submitLogIn = () => {
    // stuff
  };
  render() {
    return (
      <div className="main login">
        <h1>login coming sooon</h1>
        {/* <form>
          username: <input></input>
          password: <input></input>
          <button onClick={submitSignUp}>log in</button>
        </form> */}
      </div>
    );
  }
}

export default withRouter(LogIn);
