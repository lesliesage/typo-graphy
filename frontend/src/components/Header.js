import React from "react";
import { withRouter } from "react-router-dom";
import Timer from "./Timer";

const Header = props => {
  return (
    <div className="header">
      <Timer />
    </div>
  );
};

export default withRouter(Header);
