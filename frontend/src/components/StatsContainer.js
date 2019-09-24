import React from "react";
import { withRouter } from "react-router-dom";
import GraphSpeedPerChar from "./GraphMillisecPerChar";
import GraphComparedToMedian from "./GraphComparedToMedian";
import GraphImprovement from "./GraphImprovement";
import GraphThisTest from "./GraphThisTest";

const StatsContainer = props => {
  return (
    <div>
      <GraphThisTest />
      <GraphSpeedPerChar />
      <GraphComparedToMedian />
      {/* <GraphImprovement /> */}
    </div>
  );
};

export default withRouter(StatsContainer);
