import React from "react";
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
        backgroundColor: ["#214f6a", "#214f6a"],
        hoverBackgroundColor: ["#214f6a", "#214f6a"],
        borderColor: "white",
        hoverBorderColor: "white",
        borderWidth: 3
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
    <div className="timer-div">
      <Pie data={data} options={options} height={50} />
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
