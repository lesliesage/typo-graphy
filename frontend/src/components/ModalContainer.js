import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import {
  nextIndex,
  closingModal,
  settingModalType,
  onNext
} from "../redux/actions";

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

  const style = {
    content: {
      bottom: "auto",
      height: "200px",
      left: "50%",
      padding: "1rem",
      position: "fixed",
      right: "auto",
      top: "30%",
      transform: "translate(-50%,-" + "100px" + ")",
      width: "50%",
      maxWidth: "40rem",
      border: "1px solid #89979c",
      borderRadius: "5px",
      color: "#214f6a !important",
      fontWeight: "700",
      fontSize: "12px",
      whiteSpace: "nowrap",
      boxShadow: "1px 1px 1px 0px rgba(0, 0, 0, 0.2)"
    }
  };

  return (
    <ReactModal
      isOpen={props.modalStatus}
      onRequestClose={props.closingModal}
      contentLabel="Test Finished Modal"
      ariaHideApp={false}
      style={style}
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
    modalType: state.modal.modalType,
    currentTestResults: state.test.currentTestResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    nextIndex: () => dispatch(nextIndex()),
    closingModal: () => dispatch(closingModal()),
    settingModalType: type => dispatch(settingModalType(type)),
    onNext: () => dispatch(onNext())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);
