import React from "react";
import { connect } from "react-redux";

function findAccuratePos(snippet, typed) {
  const mistakeIndex = snippet.split("").findIndex((char, i) => {
    return char !== typed[i];
  });
  return mistakeIndex;
}

const TestSnippet = props => {
  const snippet = props.selectedSnippet;
  const pos = snippet && findAccuratePos(snippet.code, props.typedText);
  const needsSpace = snippet && (snippet.code[pos] === " " || snippet.code[pos-1] === " " )
  const goodSnippet = snippet && (snippet.code.slice(0, pos));
  const badSnippet = snippet && snippet.code.slice(pos);
  return (
    <div id="snippet-container">
      <div id="snippet-field">
        <span className="good code">{snippet ? goodSnippet : "loading code"}</span>
        {needsSpace && <span className="code">&nbsp;</span>}
        <span className="bad code" >{snippet ? badSnippet : ""}</span>
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
