import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Link, NavLink, withRouter } from "react-router-dom";

const TestFinishedModal = ({ closeModal, title, message }) => {
  return (
    <div className="finishedTestModal">
      <div className="modal-header">
        <h5 className="modal-title">{title}</h5>
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={closeModal}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>{message}</p>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={closeModal}
        >
          close
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(TestFinishedModal);
