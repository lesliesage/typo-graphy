import React from "react";
import { connect } from "react-redux";
import { Scatter } from "react-chartjs-2";
import { FIELDKEY, COLORS } from "../constants/constants";

const dataSetMaker = props => {
  const dataObj = { faster: [], slower: [], keys: [] };
  if (props.medianSet === undefined || props.medianSet === null) {
    return dataObj;
  } else {
    const medianKeys = Object.keys(props.medianSet);
    const medianValues = Object.values(props.medianSet);
    for (let i = 0; i < medianKeys.length; i++) {
      const key = medianKeys[i];
      const x = Math.round(medianValues[i]);
      const y = Math.round(props.testSummary[key]);
      if (x && y) {
        if (y <= x) {
          dataObj.faster.push({ x, y });
          dataObj.keys.push(FIELDKEY[key]);
        } else if (y > x) {
          dataObj.slower.push({ x, y });
          dataObj.keys.push(FIELDKEY[key]);
        }
      }
    }
  }
  return dataObj;
};

const data = props => {
  let darkblue = COLORS["darkblue"];
  let grey = COLORS["grey"];
  return {
    labels: dataSetMaker(props).keys,
    datasets: [
      {
        label: "faster than median",
        data: dataSetMaker(props).faster,
        fill: false,
        backgroundColor: darkblue,
        pointRadius: 6,
        pointBorderColor: darkblue,
        pointBackgroundColor: darkblue,
        pointBorderWidth: 2,

        pointHoverRadius: 8,
        pointHoverBackgroundColor: "white",
        pointHoverBorderColor: darkblue,
        pointHoverBorderWidth: 2
      },
      {
        label: "slower than median",
        data: dataSetMaker(props).slower,
        fill: false,
        backgroundColor: grey,
        pointRadius: 6,
        pointBorderColor: grey,
        pointBackgroundColor: grey,
        pointBorderWidth: 2,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "white",
        pointHoverBorderColor: grey,
        pointHoverBorderWidth: 2
      }
    ]
  };
};

const options = () => {
  let darkblue = COLORS["darkblue"];
  let grey = COLORS["grey"];
  return {
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          return "character:  " + data.labels[tooltipItem.index];
        },
        afterLabel: function(tooltipItem) {
          return (
            "\nall users:  " +
            tooltipItem.xLabel +
            " ms\nyour test:  " +
            tooltipItem.yLabel +
            " ms"
          );
        },
        labelColor: function() {
          return darkblue;
        }
      },
      backgroundColor: grey,
      bodyFontFamily: "Menlo",
      bodyFontColor: darkblue,
      bodyFontSize: 14,
      displayColors: false,
      xPadding: 20,
      yPadding: 20
    },
    title: {
      display: false
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "ms / char"
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            display: false
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "ms / char"
          },
          ticks: {
            min: 0,
            autoSkip: false
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            display: false
          }
        }
      ]
    },
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 0,
        bottom: 0
      }
    }
  };
};

const GraphComparedToMedian = props => {
  return (
    <div className="graph-area">
      <div className="graph-title-div">
        <h2>your last test v. median speeds for all users</h2>
      </div>
      <div className="graph">
        <Scatter data={data(props)} options={options()} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    testSummary: state.test.testSummary,
    medianSet: state.stats.medianSet
  };
};

export default connect(mapStateToProps)(GraphComparedToMedian);
