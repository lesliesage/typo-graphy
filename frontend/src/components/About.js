import React from "react";
import { withRouter } from "react-router-dom";

const About = props => {
  return (
    <div className="main info-pg about">
      <h1>about</h1>
      <div className="info-block">
        <div>
        <span className="title">typo-graphy</span> is a single-page web app
        built in 2019 by leslie sage. <br />
        <br />
        the app is built on a <b>ruby/rails</b> backend and <b>react/redux</b>{" "}
        frontend with <b>chart.js</b> for visualizations. it's open source on{" "}
        <a href="https://github.com/lesliesage/typo-graphy" target="_blank" rel="noopener noreferrer">
          github
        </a>
        . 
        </div>
        <br />
        in search of a project, i knew i wanted to make some visualizations
        without demanding a ton of user input (or veering too far from web
        development to data science). typo-graphy scratched that itch:
        <ul>
          <li>
            <b>users create lots of quantitative data</b> by typing, with
            keystrokes measured in miliseconds. they can provide a lot of data
            quickly without having to track or input their
            habits/budget/goals/connections for day/smonths/years.{" "}
          </li>
          <li>
            it <b>engages users</b> with competitive practice.{" "}
          </li>
          <li>
            its utility goes beyond typing. there are other code-typing sites
            out there, but this one <b>familiarizes users with regex scripts</b>
            . whether you're a seasoned developer or studying for tech
            interviews, you might as well be internalizing meaningful code while
            you work on your typing.
          </li>
          <li>
            <b>graphs!</b>
          </li>
        </ul><div>
        leslie sage is a tech- and data-enthusiast in the internaitonal
        development community. check out her company at{" "}
        <a href="https://www.devresults.com/" target="_blank" rel="noopener noreferrer">
          devresults.com
        </a>
        . thanks for visiting.
        {/* <a href="/contact">feedback</a> is always appreciated! */}
        </div>
      </div>
    </div>
  );
};

export default withRouter(About);
