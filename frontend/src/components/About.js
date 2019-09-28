import React from "react";
import { withRouter } from "react-router-dom";

const About = props => {
  return (
    <div className="main about">
      <h1>about</h1>
      <span className="title">typo-graphy</span> is a single-page web app built in 2019 by leslie
      sage. the app is built on a <b>ruby/rails</b> backend and{" "}
      <b>react/redux</b> frontend, with <b>less</b> for styling, <b>chart.js</b>{" "}
      for visualizations, and <b>spring</b> for annimation. it's open source on
      <a href="https://github.com/lesliesage/typo-graphy"> github</a>. <br />
      <br />
      in search of a project, leslie knew she wanted to make some visualizations
      without demanding a ton of user input or veering from a web development
      project to a data science project. typo-graphy scratched that itch:
      <ul>
        <li>
          users create a fair amount of quantitative data by typing, with
          keystrokes measured in miliseconds. they can provide a lot of data
          quickly without having to track or input their
          habits/budget/goals/connections for day/smonths/years.{" "}
        </li>
        <li> it engages users with competitive practice. </li>
        <li>
          it's useful. sure, there are other code-typing sites out there. but
          this one lets users add and annotate their own code snippets and
          create collections on which to practice. whether you're a seasoned
          developer or studying for tech interviews, you might as well be
          internalizing the syntax and strategies of use to you while you work
          on your code-typing speed. you know that thing you use all the time
          but always have to google? why not up your char per sec on symbols
          while hard-coding that syntax in your brain?
        </li>
        <li>
          it's data-driven. this app gives you info about which keys you're the
          slowest to hit and which you miss the most, then helps you target your
          practice with more of those characters.{" "}
        </li>
        <li> graphs! </li>
      </ul>
      leslie sage is a tech- and data-enthusiast in the internaitonal
      development community. check out her company at [devresults.com]. thanks
      for visiting. <a href="/contact">feedback</a> is always appreciated!
    </div>
  );
};

export default withRouter(About);
