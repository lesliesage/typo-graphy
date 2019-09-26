import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Pie } from "react-chartjs-2";

const Timer = props => {
  const typedLength = () => {
    return props.typedText && props.typedText.length;
  };
  const untypedLength = () => {
    return (
      props.selectedSnippet &&
      props.selectedSnippet.code.length - props.typedText.length
    );
  };
  const data = {
    datasets: [
      {
        data: [typedLength(), untypedLength()],
        backgroundColor: ["black", "white"],
        hoverBackgroundColor: ["black", "white"],
        borderColor: "white",
        hoverBorderColor: "white"
        // borderWidth: 1,
      }
    ]
  };
  const options = {
    tooltips: {
      enabled: false
    },
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: -10,
        bottom: -10
      }
    }
  };

  return (
    <div className="timer">
      <Pie data={data} options={options} height={20} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedSnippet: state.test.selectedSnippet,
    currentTestResults: state.test.currentTestResults,
    typedText: state.test.typedText
  };
};

export default connect(
  mapStateToProps,
  null
)(Timer);
