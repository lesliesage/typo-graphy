import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Link, NavLink, withRouter } from "react-router-dom";
import TestSnippet from "./TestSnippet";
import TestInput from "./TestInput";

const TestContainer = props => {
    // console.log(props.queue)
  return (
    <div>
      <TestSnippet queue={props.queue} />
      <TestInput />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    queue: state.queue
  };
};

export default connect(mapStateToProps)(TestContainer);
