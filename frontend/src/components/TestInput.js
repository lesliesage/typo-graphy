import React from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

const TestInput = props => {
  return (
    <div>
      <button>skip</button>
      <button>start</button>
      <form>
        <textarea name="input" cols="80" rows="15"></textarea>
      </form>
    </div>
  );
};

export default withRouter(TestInput);
