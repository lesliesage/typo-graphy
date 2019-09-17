import React from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import GraphSpeedPerChar from "./GraphSpeedPerChar";
import GraphSppedPerCharType from "./GraphSppedPerCharType";
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
    )
}

export default withRouter(StatsContainer);