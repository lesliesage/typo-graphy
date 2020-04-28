import React, { Component } from "react";
import { connect } from "react-redux";
import { onChange } from "../redux/actions.js";

class TestInput extends Component {
  componentDidMount = () => {
    const cursorToEnd = (input, pos) => {
      if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(pos, pos);
      } else if (input.createTextRange) {
        const range = input.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
      }
    };
    document.getElementById("input").onkeydown = function(event) {
      let ev;
      ev = ev || event;
      let key = ev.keyCode;
      if ([13, 37, 38, 39, 40].includes(key)) {
        ev.cancelBubble = true;
        ev.returnValue = false;
      }
    };
    document.getElementById("input").focus();
    document.getElementById("input").onclick = () => {
      cursorToEnd(
        document.getElementById("input"),
        this.props.typedText.length
      );
    };
  };

  render() {
    return (
      <div className="input-field">
        <input
          type="text"
          name="input"
          id="input"
          className="code"
          placeholder="start your typing test"
          // onPaste={() => {return false}}
          onChange={e =>
            this.props.onChange({
              typedText: e.target.value,
              resultSubArray: [
                e.target.selectionStart,
                e.target.textLength,
                e.nativeEvent.data,
                e.timeStamp
              ]
            })
          }
        ></input>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    typedText: state.test.typedText
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
