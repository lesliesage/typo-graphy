import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import { nextIndex, closingModal, onNext, savingTest } from "../redux/actions";
import { MODAL_STYLE } from "../constants/constants";

class ModalContainer extends Component {
  state = { redirect: false };

  componentDidMount() {
    return this.props.loggedIn ? null : this.setState({ redirect: true });
  }

  completionTime = () => {
    const res = this.props.currentTestResults;
    const start = res[0] && res[0][3];
    const end = res[0] && res[res.length - 1][3];
    return res[0] ? ((end - start) / 1000).toFixed(2) : "x";
  };

  modalGoAgain = () => {
    this.props.nextIndex();
    this.closeAndSaveIfLoggedIn();
    document.getElementById("input").value = "";
    this.props.onNext();
  };

  closeAndSaveIfLoggedIn = () => {
    this.props.loggedIn && this.props.savingTest(this.props.tempTestStore);
    this.props.closingModal();
  };

  render() {
    return (
      <ReactModal
        isOpen={this.props.modalStatus}
        onRequestClose={this.closeAndSaveIfLoggedIn}
        contentLabel="Test Finished Modal"
        ariaHideApp={false}
        style={MODAL_STYLE}
      >
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={this.closeAndSaveIfLoggedIn}
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <p className="modal-banner">
          completed in {this.completionTime()} seconds
        </p>
        <div className="modalnav-container">
          {this.props.loggedIn ? (
            <Link
              to="/stats"
              onClick={this.closeAndSaveIfLoggedIn}
              className="btn modalnav"
            >
              view your stats
            </Link>
          ) : (
            <Fragment>
              <Link
                to="/login"
                onClick={this.props.closingModal}
                className="btn modalnav"
              >
                log in to view stats
              </Link>
              <Link
                to="/signup"
                onClick={this.props.closingModal}
                className="btn modalnav"
              >
                sign up to view stats
              </Link>
            </Fragment>
          )}
          <Link to="/" onClick={this.modalGoAgain} className="btn modalnav">
            go again
          </Link>
        </div>
      </ReactModal>
    );
  }
}
const mapStateToProps = state => {
  return {
    modalStatus: state.modal.modalStatus,
    currentTestResults: state.test.currentTestResults,
    loggedIn: state.user.id > 0 ? true : false,
    user: state.user ? state.user : null, // need this?
    tempTestStore: state.test.tempTestStore
  };
};

const mapDispatchToProps = dispatch => {
  return {
    nextIndex: () => dispatch(nextIndex()),
    closingModal: () => dispatch(closingModal()),
    onNext: () => dispatch(onNext()),
    savingTest: test => {
      dispatch(savingTest(test));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);
