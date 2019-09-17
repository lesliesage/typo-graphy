import React from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import {changeTypedText} from "../redux/actions.js"

const TestInput = props => {
  return (
    <div>
      <button>skip</button>
      <button>start</button>
      <form>
        <textarea name="input" cols="80" rows="15" onChange={e => props.onChange(e.target.value)}></textarea>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
    return {
      value: state.typedText
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onChange: (typedText) => {dispatch(changeTypedText(typedText))}
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(TestInput);
  
