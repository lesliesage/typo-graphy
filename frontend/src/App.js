import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import TestContainer from "./components/TestContainer";
import StatsContainer from "./components/StatsContainer";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import About from "./components/About";
import Privacy from "./components/Privacy";
import Help from "./components/Help";
import NotFound from "./components/NotFound";
import ModalContainer from "./components/ModalContainer";
import {
  updateUser,
  loading,
  fetchingQueue,
  fetchingMedians
} from "./redux/actions";
import { URL_PROFILE } from "./constants/constants.js";

class App extends Component {
  componentDidMount() {
    this.props.fetchingQueue();
    this.props.fetchingMedians();

    if (localStorage.getItem("token")) {
      fetch(URL_PROFILE, {
        headers: {
          Authentication: `Bearer ${localStorage.getItem("token")}`
        }
      })
        .then(res => res.json())
        .then(user => {
          this.props.updateUser(user);
        });
    } else {
      this.props.loading();
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="sub-header">
          <Nav />
          <ModalContainer />
          <Switch>
            <Route exact path="/" component={TestContainer} />
            <Route exact path="/profile" component={TestContainer} />
            <Route exact path="/stats" component={StatsContainer} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/about" component={About} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/help" component={Help} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => {
      dispatch(updateUser(user));
    },
    loading: () => {
      dispatch(loading());
    },
    fetchingQueue: () => {
      dispatch(fetchingQueue());
    },
    fetchingMedians: () => {
      dispatch(fetchingMedians());
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

// deal with copy/paste:

// // Register onpaste on inputs and textareas in browsers that don't
// // natively support it.
// (function () {
//   var onload = window.onload;

//   window.onload = function () {
//       if (typeof onload == "function") {
//           onload.apply(this, arguments);
//       }

//       var fields = [];
//       var inputs = document.getElementsByTagName("input");
//       var textareas = document.getElementsByTagName("textarea");

//       for (var i = 0; i < inputs.length; i++) {
//           fields.push(inputs[i]);
//       }

//       for (var i = 0; i < textareas.length; i++) {
//           fields.push(textareas[i]);
//       }

//       for (var i = 0; i < fields.length; i++) {
//           var field = fields[i];

//           if (typeof field.onpaste != "function" && !!field.getAttribute("onpaste")) {
//               field.onpaste = eval("(function () { " + field.getAttribute("onpaste") + " })");
//           }

//           if (typeof field.onpaste == "function") {
//               var oninput = field.oninput;

//               field.oninput = function () {
//                   if (typeof oninput == "function") {
//                       oninput.apply(this, arguments);
//                   }

//                   if (typeof this.previousValue == "undefined") {
//                       this.previousValue = this.value;
//                   }

//                   var pasted = (Math.abs(this.previousValue.length - this.value.length) > 1 && this.value != "");

//                   if (pasted && !this.onpaste.apply(this, arguments)) {
//                       this.value = this.previousValue;
//                   }

//                   this.previousValue = this.value;
//               };

//               if (field.addEventListener) {
//                   field.addEventListener("input", field.oninput, false);
//               } else if (field.attachEvent) {
//                   field.attachEvent("oninput", field.oninput);
//               }
//           }
//       }
//   }
// })();
