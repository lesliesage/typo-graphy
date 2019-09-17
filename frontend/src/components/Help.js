import React from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import HelpArticle from "./HelpArticle";

const Help = props => {
    return (
        <div>
            <HelpArticle />
        </div>
    )
}

export default withRouter(Help);