import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import {
  nextIndex,
  closingModal,
  // settingModalType,
  onNext
} from "../redux/actions";
import { MODAL_STYLE } from "../constants/constants";

const ModalContainer = props => {
  function completionTime() {
    const res = props.currentTestResults;
    const start = res[0] && res[0][3];
    const end = res[0] && res[res.length - 1][3];
    return res[0] ? ((end - start) / 1000).toFixed(2) : "x";
  }

  function modalGoAgain() {
    props.nextIndex();
    props.closingModal();
    document.getElementById("input").value = "";
    props.onNext();
  }

  return (
    <ReactModal
      isOpen={props.modalStatus}
      onRequestClose={props.closingModal}
      contentLabel="Test Finished Modal"
      ariaHideApp={false}
      style={MODAL_STYLE}
    >
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={props.closingModal}
      >
        <span aria-hidden="true">&times;</span>
      </button>

      <p className="modal-banner">completed in {completionTime()} seconds</p>
      <div className="modalnav-container">
        <Link to="/stats" onClick={props.closingModal} className="btn modalnav">
          view your stats
        </Link>

        <Link to="/" onClick={modalGoAgain} className="btn modalnav">
          go again
        </Link>
      </div>
    </ReactModal>
  );
};

const mapStateToProps = state => {
  return {
    modalStatus: state.modal.modalStatus,
    // modalType: state.modal.modalType,
    currentTestResults: state.test.currentTestResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    nextIndex: () => dispatch(nextIndex()),
    closingModal: () => dispatch(closingModal()),
    // settingModalType: type => dispatch(settingModalType(type)),
    onNext: () => dispatch(onNext())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);
