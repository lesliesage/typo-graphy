import React from "react";
import { withRouter } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="main info-pg">
      <h1>page not found</h1>
      <div className="info-block">
        <p>please try harder</p>
      </div>
    </div>
  );
};

export default withRouter(NotFound);
