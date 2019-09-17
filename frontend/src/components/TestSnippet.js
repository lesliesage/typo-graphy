import React from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

const Snippet = props => {
  return (
    <div>
      <form>
        <textarea name="input" cols="80" rows="15" disabled></textarea>
      </form>
    </div>
  );
};

export default withRouter(Snippet);
