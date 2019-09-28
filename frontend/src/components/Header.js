import React from "react";
import { connect } from "react-redux";
import { Pie } from "react-chartjs-2";

const Header = props => {
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
    responsive: false,
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
    <div className="header">
      t • y • p • o • - • g • r • a • p • h • y<Pie data={data} options={options} height={40} width={200} />
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
)(Header);
