import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Timer from "./Timer";


const Header = props => {
    return (
        <div>
            * * * <Timer /> * * *
        </div>
    )
}

export default withRouter(Header);