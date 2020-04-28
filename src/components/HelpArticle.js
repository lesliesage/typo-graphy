import React from "react";
import { withRouter } from "react-router-dom";

const HelpArticle = props => {
    return (
        <div className="help-article">{props.helpArticle.help_text}</div>
    )
}

export default withRouter(HelpArticle);