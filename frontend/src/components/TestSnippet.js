import React from "react";
import { connect } from "react-redux";

function findAccuratePos(snippet, typed) {
  var mistakeIndex = snippet.split("").findIndex((char, i) => {
    return char !== typed[i];
  });
  return mistakeIndex;
}

const TestSnippet = props => {
  const snippet = props.selectedSnippet;
  const pos = snippet && findAccuratePos(snippet.code, props.typedText);
  const goodSnippet = snippet && snippet.code.slice(0, pos);
  const badSnippet = snippet && snippet.code.slice(pos);
  return (
    <div id="snippet-container">
      <div id="snippet-field">
        <span id="good-snippet">{snippet ? goodSnippet : "loading code"}</span>
        <span id="bad-snippet">{snippet ? badSnippet : ""}</span>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedSnippet: state.test.selectedSnippet,
    typedText: state.test.typedText
  };
};

export default connect(mapStateToProps)(TestSnippet);
