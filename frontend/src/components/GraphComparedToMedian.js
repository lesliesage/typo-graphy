import React from "react";
import { connect } from "react-redux";
import { Scatter } from "react-chartjs-2";

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
      // console.log("key:", key, ", x:", x, ", y:", y);
      if (x && y) {
        if (y <= x) {
          dataObj.faster.push({ x, y });
          dataObj.keys.push(key);
          // console.log("faster", { x, y });
        } else if (y > x) {
          dataObj.slower.push({ x, y });
          dataObj.keys.push(key);
          // console.log("slower", { x, y });
        }
      }
    }
  }
  return dataObj;
};

const data = props => {
  return {
    labels: dataSetMaker(props).keys,
    datasets: [
      {
        label: "faster than median",
        fill: false,
        backgroundColor: "blue",
        pointBorderColor: "blue",
        pointBackgroundColor: "blue",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "white",
        pointHoverBorderColor: "blue",
        pointHoverBorderWidth: 2,
        pointRadius: 8,
        pointHitRadius: 10,
        data: dataSetMaker(props).faster
      },
      {
        label: "slower than median",
        fill: false,
        backgroundColor: "black",
        pointBorderColor: "black",
        pointBackgroundColor: "black",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "black",
        pointHoverBorderWidth: 2,
        pointRadius: 8,
        pointHitRadius: 10,
        data: dataSetMaker(props).slower
      }
    ]
  };
};

const options = {
  tooltips: {
    callbacks: {
      label: function(tooltipItem, data) {
        let label = data.labels[tooltipItem.index];
        return (
          label + ": (" + tooltipItem.xLabel + ", " + tooltipItem.yLabel + ")"
        );
      }
    }
  },
  title: {
    display: false
  },
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        scaleLabel: {
          display: true
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

const GraphComparedToMedian = props => {
  return (
    <div className="graph-area">
      <div className="graph-title-div">
        <h2>your speeds v. median speeds</h2>
      </div>
      <div className="graph">
        <Scatter data={data(props)} options={options} />
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
