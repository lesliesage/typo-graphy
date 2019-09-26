import React from "react";
import { withRouter } from "react-router-dom";

const Privacy = props => {
  return (
    <div className="info-page">
      <h1>privacy</h1>
      <p>typo-graphy will never display ads or sell your data.</p>
      <p>
        emails will only be used for password resets or to respond to inquiries
        or nice comments.
      </p>
      <p>
        typo-graphy might track some usage information to see if anyone ever
        uses the site.
      </p>
    </div>
  );
};

export default withRouter(Privacy);
