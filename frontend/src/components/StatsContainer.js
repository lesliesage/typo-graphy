import React from "react";
import { withRouter } from "react-router-dom";
import GraphSpeedPerChar from "./GraphMillisecPerChar";
import GraphSppedPerCharType from "./GraphSpeedPerCharType";
import GraphImprovement from "./GraphImprovement";
import GraphSpeedPerLanguage from "./GraphSpeedPerLanguage";

const StatsContainer = props => {
  return (
    <div>
      <GraphSpeedPerChar />
      <GraphSppedPerCharType />
      <GraphImprovement />
      <GraphSpeedPerLanguage />
    </div>
  );
};

export default withRouter(StatsContainer);
