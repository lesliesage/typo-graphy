import React, { Component } from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

const TestSnippet = props => {
  const snippet = props.selectedSnippet;
  return (
    <div>
      <form>
        <textarea
          name="input"
          cols="80"
          rows="15"
          disabled
          value={snippet ? snippet.code : "loading code"}
        ></textarea>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedSnippet: state.selectedSnippet
  };
};

export default connect(mapStateToProps)(TestSnippet);
