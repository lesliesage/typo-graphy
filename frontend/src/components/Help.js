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
      <div className="main info-pg">
        <h1>help</h1>
        <div className="search-container">
          <input
            type="text"
            className="search"
            placeholder="search for help topics"
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="info-block">
          {this.state.helpArticles.map(helpArticle => {
            if (helpArticle.help_text.includes(this.state.searchText)) {
              return (
                <HelpArticle helpArticle={helpArticle} key={helpArticle.id} />
              );
            } else return null;
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Help);
