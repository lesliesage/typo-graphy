import React from "react";
import { connect } from "react-redux";
import { Bar } from "react-chartjs-2";

const GraphMillisecPerChar = props => {
  const FIELDKEY = {
    alpha: "a-z",
    numeric: "0-9",
    tilde: "~",
    backtick: "`",
    exclamation: "!",
    at: "@",
    octothorpe: "#",
    dollar: "$",
    percent: "%",
    carrot: "^",
    ampersand: "&",
    star: "*",
    open_paren: "(",
    close_paren: ")",
    long_dash: "_",
    dash: "-",
    plus: "+",
    equals: "=",
    open_curly: "{",
    close_curly: "}",
    open_bracket: "[",
    close_bracket: "]",
    pipe: "|",
    backslash: "\\",
    colon: ":",
    semicolon: ";",
    doublequote: '"',
    singlequote: "'",
    open_angle: "<",
    close_angle: ">",
    comma: ",",
    period: ".",
    question: "?",
    slash: "/"
  };

  function arrayify(obj) {
    // turn test result into object, remove metadata (id, created_at, user_id, etc.)
    const arr = Object.entries(obj).filter(el => {
      return Object.keys(FIELDKEY).includes(el[0]);
    });
    // remove unused characters and sort ascending by typing speed
    return arr
      .filter(el => el[1])
      .sort((a, b) => {
        return a[1] > b[1] ? 1 : -1;
      });
  }

  function getKeys(arr) {
    // return keys for x-axis, replacing char's text label with symbol
    return arr.map(el => {
      return FIELDKEY[el[0]];
    });
  }

  function getValues(arr) {
    // return values for y-axis
    return arr.map(el => {
      return Math.round(el[1]); // milliseconds per character
      // return Math.round((1 / el[1]) * 1000000) / 1000; // char per second
    });
  }

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
    labels: getKeys(arrayify(props.testSummary)),
    datasets: [
      {
        backgroundColor: "lightgrey",
        borderColor: "grey",
        borderWidth: 1,
        hoverBackgroundColor: "grey",
        hoverBorderColor: "black",
        data: getValues(arrayify(props.testSummary)),
        legend: {
          display: false
        }
      }
    ]
  };

  return (
    <div>
      <h2>average milliseconds per character</h2>
      <Bar
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

export default connect(mapStateToProps)(GraphMillisecPerChar);
