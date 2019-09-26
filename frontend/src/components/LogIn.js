import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class LogIn extends Component {
  state = { email: "", password: "" };

  submitLogIn = () => {
    // stuff
  };
  render() {
    return (
      <div>
        <div className="coming-soon">coming soon</div>
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
