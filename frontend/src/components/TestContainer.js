import React from "react";
import { connect } from "react-redux";
import TestSnippet from "./TestSnippet";
import TestInput from "./TestInput";
import { openingModal, closingModal, settingModalType, savingTest, nextIndex } from "../redux/actions";
import GraphThisTest from "./GraphThisTest";

const TestContainer = props => {
  
  const openModal = () => {
    console.log("hitting openModal in TestContainer")
    props.savingTest(testToSave(props));
    props.openingModal()
  };

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
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      const existingPos = newArr.map(el => el[0]);
      if (!!arr[i][2] && !existingPos.includes(arr[i][0])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

  function calculateTimes(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      const newEl = [];
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
        case el[0].match(/^[0-9]+$/) ? el[0].match(/^[0-9]+$/)[0] : null:
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
        case "\\":
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
    const n = {};
    FIELDS.forEach(field => {
      if (field === "user_id") {
        n[field] = 17;
      } else if (field === "snippet_id") {
        n[field] = props.selectedSnippet.id;
      } else {
        const matchSet = arr.filter(el => {
          return el[0] === field;
        });
        const average =
          matchSet.reduce((tot, el) => tot + el[1], 0) / matchSet.length;
        n[field] = isNaN(average) ? null : average;
      }
    });
    return n;
  }

  const testToSave = props => {
    let ans = processAverages(
      renameChars(
        removeSpaces(calculateTimes(handleDeletes(props.currentTestResults)))
      )
    );
    return ans;
  };

  return (
    <div className="test-container">
      <button className="next-btn" onClick={props.nextIndex}>next</button>
      <TestSnippet />
      <TestInput />
      <div className="graph"><GraphThisTest /></div>
      {props.isAccurate && props.isComplete && openModal()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAccurate: state.test.isAccurate,
    isComplete: state.test.isComplete,
    modalStatus: state.modal.modalStatus,
    modalType: state.modal.modalType,
    selectedSnippet: state.test.selectedSnippet,
    currentTestResults: state.test.currentTestResults,
    savedTest: state.test.testSummary,
    queue: state.test.queue,
    used: state.test.used
  };
};

const mapDispatchToProps = dispatch => {
  return {
    savingTest: testToSave => {
      dispatch(savingTest(testToSave));
    },
    nextIndex: () => dispatch(nextIndex()),
    openingModal: () => dispatch(openingModal()),
    closingModal: () => dispatch(closingModal()),
    settingModalType: type => dispatch(settingModalType(type))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestContainer);
