import React from "react";
import { connect } from "react-redux";
import { onChange } from "../redux/actions.js";

const TestInput = props => {
  return (
    <div>
      <button>skip</button>
      <form>
        <textarea
          name="input"
          cols="80"
          rows="15"
          onChange={e =>
            props.onChange({
              typedText: e.target.value,
              resultSubArray: [
                e.target.selectionStart,
                e.target.textLength,
                e.nativeEvent.data,
                e.timeStamp
              ]
            })
          }
        ></textarea>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    givenSnippetText: state.selectedSnippet ? state.selectedSnippet.code : ""
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: onChangeObj => {
      dispatch(onChange(onChangeObj));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestInput);
