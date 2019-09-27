import React from "react";
import { withRouter } from "react-router-dom";
import Timer from "./Timer";

const Header = () => {
  return (
    <div className="header">
      <div className="header-text-container"><h2 classname="header-text">typo-graphy</h2></div>
      <Timer />
    </div>
  );
};

export default withRouter(Header);
