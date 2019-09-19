import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchingQueue } from "./redux/actions";

const FIELDS = [
  "user_id",
  "snippet_id",
  "alpha",
  "numeric",
  "tilde",
  "backtick",
  "exclamation",
  "at",
  "octothorpe",
  "dollar",
  "percent",
  "carrot",
  "ampersand",
  "star",
  "open_paren",
  "close_paren",
  "long_dash",
  "dash",
  "plus",
  "equals",
  "open_curly",
  "close_curly",
  "open_bracket",
  "close_bracket",
  "pipe",
  "backslash",
  "colon",
  "semicolon",
  "doublequote",
  "singlequote",
  "open_angle",
  "close_angle",
  "comma",
  "period",
  "question",
  "slash"
];

function handleDeletes(arr) {
  var newArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    var existingPos = newArr.map(el => el[0]);
    if (!!t[i][2] && !existingPos.includes(arr[i][0])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function calculateTimes(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length - 1; i++) {
    var newEl = [];
    newEl.push(arr[i][2]);
    newEl.push(arr[i][3] - arr[i + 1][3]);
    newArr.push(newEl);
  }
  return newArr;
}

function removeSpaces(arr) {
  return arr.filter(el => {
    return el[0] !== " ";
  });
}

function renameChars(arr) {
  return arr.map(el => {
    switch (el[0]) {
      case el[0].match(/^[A-Z]+$/i) ? el[0].match(/^[A-Z]+$/i)[0] : null:
        return ["alpha", el[1]];
      case el[0].match(/^[0-9]+$/) ? el[0].match(/^[A-Z]+$/i)[0] : null:
        return ["numeric", el[1]];
      case "~":
        return ["tilde", el[1]];
      case "`":
        return ["backtick", el[1]];
      case "!":
        return ["exclamation", el[1]];
      case "@":
        return ["at", el[1]];
      case "#":
        return ["octothorpe", el[1]];
      case "$":
        return ["dollar", el[1]];
      case "%":
        return ["percent", el[1]];
      case "^":
        return ["carrot", el[1]];
      case "&":
        return ["ampersand", el[1]];
      case "*":
        return ["star", el[1]];
      case "(":
        return ["open_paren", el[1]];
      case ")":
        return ["close_paren", el[1]];
      case "_":
        return ["long_dash", el[1]];
      case "-":
        return ["dash", el[1]];
      case "+":
        return ["plus", el[1]];
      case "=":
        return ["equals", el[1]];
      case "{":
        return ["open_curly", el[1]];
      case "}":
        return ["close_curly", el[1]];
      case "[":
        return ["open_bracket", el[1]];
      case "]":
        return ["close_bracket", el[1]];
      case "|":
        return ["pipe", el[1]];
      case "/":
        return ["backslash", el[1]];
      case ":":
        return ["colon", el[1]];
      case ";":
        return ["semicolon", el[1]];
      case '"':
        return ["doublequote", el[1]];
      case "'":
        return ["singlequote", el[1]];
      case "<":
        return ["open_angle", el[1]];
      case ">":
        return ["close_angle", el[1]];
      case ",":
        return ["comma", el[1]];
      case ".":
        return ["period", el[1]];
      case "?":
        return ["question", el[1]];
      case "/":
        return ["slash", el[1]];
      default:
        return null;
    }
  });
}

function processAverages(arr) {
  var n = {};
  FIELDS.forEach(field => {
    if (field === "user_id") {
      n[field] = 1;
    } // fill this out in codebase for the current user
    else if (field === "snippet_id") {
      n[field] = 1;
    } // fill this out in codebase for the current snippet ID
    else {
      var matchSet = arr.filter(el => {
        return el[0] === field;
      });
      var average =
        matchSet.reduce((tot, el) => tot + el[1], 0) / matchSet.length;
      n[field] = isNaN(average) ? null : average;
    }
  });
  return n;
}

const TestToSave = props =>
  processAverages(
    renameChars(
      removeSpaces(calculateTimes(handleDeletes(props.currentTestResults)))
    )
  );

const mapStateToProps = state => {
  return {
    selectedSnippet: state.test.selectedSnippet,
    currentTestResults: state.currentTestResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // fetchingQueue: () => {
    //   dispatch(fetchingQueue());
    // },
    //prop : ()=>{dispatch(actionObj)} <-- example
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onChange: onChangeObj => {
//       dispatch(onChange(onChangeObj));
//     }
//   };
// };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TestToSave)
);
