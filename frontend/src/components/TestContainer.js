import React, { Component } from "react";
import { connect } from "react-redux";
import TestSnippet from "./TestSnippet";
import TestInput from "./TestInput";
import ReactModal from "react-modal";
import {
  openingModal,
  savingTest,
  nextIndex,
  onNext
} from "../redux/actions";
import GraphThisTest from "./GraphThisTest";
import { FIELDS, MODAL_STYLE } from "../constants/constants";

class TestContainer extends Component {
  state = { showAboutModal: false };

  handleDeletes = arr => {
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      const existingPos = newArr.map(el => el[0]);
      if (!!arr[i][2] && !existingPos.includes(arr[i][0])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  };

  calculateTimes = arr => {
    const newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      const newEl = [];
      newEl.push(arr[i][2]);
      newEl.push(arr[i][3] - arr[i + 1][3]);
      newArr.push(newEl);
    }
    return newArr;
  };

  removeSpaces = arr => {
    return arr.filter(el => {
      return el[0] !== " ";
    });
  };

  renameChars = arr => {
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
  };

  processAverages = arr => {
    const n = {};
    FIELDS.forEach(field => {
      if (field === "user_id") {
        n[field] = this.props.user.id;
      } else if (field === "snippet_id") {
        n[field] = this.props.selectedSnippet.id;
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
  };

  testToSave = () => {
    let ans = this.processAverages(
      this.renameChars(
        this.removeSpaces(
          this.calculateTimes(this.handleDeletes(this.props.currentTestResults))
        )
      )
    );
    return ans;
  };

  openModal = () => {
    this.props.savingTest(this.testToSave(this.props));
    this.props.openingModal();
  };

  nextSnippet = () => {
    this.props.nextIndex();
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
    this.props.onNext();
  };

  toggleAboutModal = () => {
    this.setState({ showAboutModal: !this.state.showAboutModal });
  };

  render() {
    return (
      <div className="main">
        <div className="test-tools">
          <div className="test-buttons">
            <button className="btn" onClick={this.nextSnippet}>
              next snippet
            </button>
            <button className="btn" onClick={this.toggleAboutModal}>
              about this regex
            </button>
          </div>
          <TestSnippet />
          <TestInput />
        </div>
        <GraphThisTest />
        {this.props.isAccurate && this.props.isComplete && this.openModal()}
        <ReactModal
          isOpen={this.state.showAboutModal}
          onRequestClose={this.toggleAboutModal}
          contentLabel="About Snippet Modal"
          ariaHideApp={false}
          style={MODAL_STYLE}
        >
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={this.toggleAboutModal}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="annotation">
            <div className="annotation-preface">
              this regex script lets you:
            </div>
            {this.props.selectedSnippet &&
              this.props.selectedSnippet.annotation}
          </div>
        </ReactModal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAccurate: state.test.isAccurate,
    isComplete: state.test.isComplete,
    selectedSnippet: state.test.selectedSnippet,
    currentTestResults: state.test.currentTestResults,
    user: state.user ? state.user : null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    savingTest: testToSave => {
      dispatch(savingTest(testToSave));
    },
    nextIndex: () => dispatch(nextIndex()),
    openingModal: () => dispatch(openingModal()),
    onNext: () => dispatch(onNext())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestContainer);
