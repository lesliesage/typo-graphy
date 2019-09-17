import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Link, NavLink, withRouter } from "react-router-dom";
import TestSnippet from "./TestSnippet";
import TestInput from "./TestInput";

const TestContainer = props => {
  console.log(props);
  return (
    <div>
      <TestSnippet />
      <TestInput />
    </div>
  );
};

export default withRouter(TestContainer);
