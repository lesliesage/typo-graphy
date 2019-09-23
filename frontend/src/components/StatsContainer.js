import React from "react";
import { withRouter } from "react-router-dom";
import GraphSpeedPerChar from "./GraphMillisecPerChar";
import GraphSppedPerCharType from "./GraphSpeedPerCharType";
import GraphImprovement from "./GraphImprovement";
import GraphThisTest from "./GraphThisTest";

const StatsContainer = props => {
  return (
    <div>
      <GraphThisTest />
      <GraphSpeedPerChar />
      <GraphSppedPerCharType />
      <GraphImprovement />
    </div>
  );
};

export default withRouter(StatsContainer);
