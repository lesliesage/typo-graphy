
import React from "react";
import { withRouter } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <a href="/">
        <button className="btn">typo-graphy</button>
      </a>
      <a href="/stats">
        <button className="btn">stats</button>
      </a>
      <button className="btn">login</button>
      <button className="btn">signup</button>
      {/* <a href="/contact"><button className="btn">contact</button></a> */}
      <a href="/about">
        <button className="btn">about</button>
      </a>
      <a href="/privacy">
        <button className="btn">privacy policy</button>
      </a>
      <a href="/help">
        <button className="btn">help</button>
      </a>
    </div>
  );
};

export default withRouter(Nav);
