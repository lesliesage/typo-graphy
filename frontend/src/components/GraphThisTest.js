import React from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";

const GraphThisTest = props => {
  function handleDeletes(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
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
      newEl.push(arr[i + 1][3] - arr[i][3]);
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
    console.log(props.currentTestResults)
    // return values for y-axis
    return arr.map(el => {
      return Math.round(el[1]); // milliseconds per character
    });
  }

  const cleanedResult = removeSpaces(calculateTimes(handleDeletes(props.currentTestResults)))

  const options = {
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
            min: 0
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

  const data = {
    labels: getKeys(cleanedResult),
    datasets: [
      {
        backgroundColor: "lightgrey",
        borderColor: "grey",
        borderWidth: 1,
        hoverBackgroundColor: "grey",
        hoverBorderColor: "black",
        data: getValues(cleanedResult),
        legend: {
          display: false
        }
      }
    ]
  };

  return (
    <div>
      <h2>the play-by-play [this test]</h2>
      <Line
        data={data}
        options={options}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedSnippet: state.test.selectedSnippet,
    currentTestResults: state.test.currentTestResults,
    testSummary: state.test.testSummary,
    allTests: state.stats.allTests
  };
};

export default connect(mapStateToProps)(GraphThisTest);
