import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchingSnippets } from "./redux/actions";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import TestContainer from "./components/TestContainer";
import StatsContainer from "./components/StatsContainer";
import About from "./components/About";
import Privacy from "./components/Privacy";
import Help from "./components/Help";

class App extends Component {
  componentDidMount() {
    this.props.fetchingSnippets();
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/stats" component={StatsContainer} />
          <Route exact path="/about" component={About} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/help" component={Help} />
          <Route path="/" component={TestContainer} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingSnippets: () => {
      dispatch(fetchingSnippets());
    }
    //prop : ()=>{dispatch(actionObj)}
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
