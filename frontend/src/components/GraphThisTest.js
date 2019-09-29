import React from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";
import { COLORS } from "../constants/constants";


const GraphThisTest = props => {
  function handleDeletes(arr) {
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      const existingPos = newArr.map(el => el[0]);
      if (!!arr[i][2] && !existingPos.includes(arr[i][0])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

  function calculateTimes(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      const newEl = [];
      newEl.push(arr[i][2]);
      newEl.push(arr[i][3] - arr[i + 1][3]);
      newArr.push(newEl);
    }
    return newArr;
  }

  function removeSpaces(arr) {
    return arr.filter(el => {
      return el[0] !== " ";
    });
  }

  function getKeys(arr) {
    // return keys for x-axis
    return arr.map(el => {
      return el[0];
    });
  }

  function getValues(arr) {
    // return values for y-axis
    return arr.map(el => {
      return Math.round(el[1]); // milliseconds per character
    });
  }

  const cleanedResult = removeSpaces(
    calculateTimes(handleDeletes(props.currentTestResults)).reverse()
  );

  const options = () => {
    let darkblue = COLORS["darkblue"];
    let grey = COLORS["grey"];
    let darkgrey = COLORS["darkgrey"];
    let midgrey = COLORS["midgrey"];
    return {
      tooltips: {
        callbacks: {
          title: function() {
            return false;
          },
          label: function(tooltipItem) {
            return "character:  " + tooltipItem.label;
          },
          afterLabel: function(tooltipItem) {
            return "\ntime:       " + tooltipItem.value + " ms";
          }
        },
        backgroundColor: midgrey, // change to grey if border works
        borderColor: darkgrey, // figure out why this doesn't work
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
          top: 20,
          bottom: 20
        }
      }
    };
  };

  const data = () => {
    const grey = COLORS["grey"];
    const darkgrey = COLORS["darkgrey"];
    const darkestgrey = COLORS["darkestgrey"];
    return {
      labels: getKeys(cleanedResult),
      datasets: [
        {
          backgroundColor: grey,
          borderColor: darkgrey,
          borderWidth: 1,
          hoverBackgroundColor: darkgrey,
          hoverBorderColor: darkestgrey,
          data: getValues(cleanedResult),
          legend: {
            display: false
          }
        }
      ]
    };
  };

  return (
    <div className="graph-area">
      <div className="graph-title-div">
        <h2>play-by-play</h2>
      </div>
      <div className="graph">
        <Line data={data()} options={options()} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentTestResults: state.test.currentTestResults
  };
};

export default connect(mapStateToProps)(GraphThisTest);
