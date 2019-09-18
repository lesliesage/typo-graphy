import React from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { changeTypedText, addToTestResults } from "../redux/actions.js";

const TestInput = props => {
  return (
    <div>
      <button>skip</button>
      <button>start</button>
      <form>
        <textarea
          name="input"
          cols="80"
          rows="15"
          onChange={e =>
            props.onChange(e.target.value, [
              e.target.selectionStart,
              e.target.textLength,
              e.nativeEvent.data,
              e.timeStamp
            ])
          }
        ></textarea>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    typedText: state.typedText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: (typedText, resultSubArray) => {
      dispatch(changeTypedText(typedText));
      dispatch(addToTestResults(resultSubArray));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestInput);
