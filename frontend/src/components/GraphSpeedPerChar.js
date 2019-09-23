import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Bar } from "react-chartjs-2";

const GraphSpeedPerChar = props => {
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
    // return values for y-axis, rounding to integer
    return arr.map(el => {
      return Math.round(el[1]);
    });
  }

  const data = {
    labels: getKeys(arrayify(props.testSummary)),
    datasets: [
      {
        // label: ,
        backgroundColor: "lightgrey",
        borderColor: "grey",
        borderWidth: 0,
        hoverBackgroundColor: "grey",
        hoverBorderColor: "black",
        data: getValues(arrayify(props.testSummary)),
        legend: {
          display: false
        },
        options: {
          title: {
            display: false
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  display: false
                },
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                  linewidth: 0,
                  drawOnChartArea: false,
                  display: false
                }
              }
            ],
            yAxes: [
              {
                ticks: {
                  display: false
                },
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                  linewidth: 0,
                  drawOnChartArea: false,
                  display: false
                }
              }
            ]
          }
        }
      }
    ]
  };

  return (
    <div>
      <h2>GraphSpeedPerChar</h2>
      <Bar
        data={data}
        // width={100}
        // height={50}
        // options={{ maintainAspectRatio: false }}
        // options={options}
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

export default connect(mapStateToProps)(GraphSpeedPerChar);
// export default withRouter(GraphSpeedPerChar);
