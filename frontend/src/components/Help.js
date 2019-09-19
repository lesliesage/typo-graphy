import React from "react";
import { withRouter } from "react-router-dom";
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