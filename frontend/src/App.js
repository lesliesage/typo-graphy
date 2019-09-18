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
import { fetchingQueue, hideModal, showModal } from "./redux/actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchingQueue();
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
    fetchingQueue: () => {
      dispatch(fetchingQueue());
    },
    //prop : ()=>{dispatch(actionObj)}
    hideModal: () => dispatch(hideModal()),
    showModal: (modalProps, modalType) => {
      dispatch(showModal({ modalProps, modalType }));
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
