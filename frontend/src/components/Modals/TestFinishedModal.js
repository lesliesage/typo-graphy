import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Link, NavLink, withRouter } from "react-router-dom";

const TestFinishedModal = ({ closeModal, title, message }) => {
  return (
    <div className="finishedTestModal">
      {/* <h5 className="modal-title">{title}</h5>
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={closeModal}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <p>{message}</p>
      <button type="button" onClick={closeModal}>
        close
      </button> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    closeModal: state.modal.closeModal
  };
};

export default connect(mapStateToProps)(TestFinishedModal);
