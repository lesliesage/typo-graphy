import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Link, NavLink, withRouter } from "react-router-dom";
import Snippet from "./Snippet";
import TestInput from "./TestInput";

const TestContainer = props => {
  return (
    <div>
      <Snippet />
      <TestInput />
    </div>
  );
};

export default withRouter(TestContainer);
