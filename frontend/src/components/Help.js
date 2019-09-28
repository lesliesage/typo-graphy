import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import HelpArticle from "./HelpArticle";
import { URL_HELP_ARTICLES } from "../constants/constants.js";

class Help extends Component {
  state = {
    searchText: "",
    helpArticles: []
  };

  componentDidMount() {
    fetch(URL_HELP_ARTICLES)
      .then(res => res.json())
      .then(articles => this.setState({ helpArticles: articles }));
  }

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      <div className="main">
        <h1>help</h1>
        <input
          onChange={this.handleChange}
          placeHolder="search for help topics"
        ></input>
        {this.state.helpArticles.map(helpArticle => {
          if (helpArticle.help_text.includes(this.state.searchText)) {
            return (
              <HelpArticle helpArticle={helpArticle} key={helpArticle.id} />
            );
          } else return null;
        })}
      </div>
    );
  }
}

export default withRouter(Help);
