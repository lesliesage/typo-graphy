import React from "react";
import { withRouter } from "react-router-dom";

const Privacy = props => {
  return (
    <div className="main info-pg">
      <h1>privacy</h1>
      <div className="info-block">
        <p>typo-graphy will never display ads or sell your data.</p><br/>
        <p>
          emails will only be used for password resets or to respond to
          inquiries or nice comments.
        </p><br/>
        <p>
          typo-graphy might track some usage information to see if anyone ever
          uses the site.
        </p>
      </div>
    </div>
  );
};

export default withRouter(Privacy);
