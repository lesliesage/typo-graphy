import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SignUp extends Component {
  state = { email: "", password: "" };

  submitSignUp = () => {
    // stuff
  };
  render() {
    return (
      <div className="main signup">
        <h1>signup coming sooon</h1>
        {/* <form>
          username: <input></input>
          email: <input></input>
          password: <input></input>
          confirm password: <input></input>
          <button onClick={submitSignUp}>sign up</button>
        </form> */}
      </div>
    );
  }
}

export default withRouter(SignUp);
