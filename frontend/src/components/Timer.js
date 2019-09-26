import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Pie } from "react-chartjs-2";

const Timer = props => {
  const data = {
    datasets: [
      {
        data: [20, 40],
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

export default withRouter(Timer);
