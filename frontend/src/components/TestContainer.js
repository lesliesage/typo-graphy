import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Link, NavLink, withRouter } from "react-router-dom";
import TestSnippet from "./TestSnippet";
import TestInput from "./TestInput";
import TestFinishedModal from "./Modals/TestFinishedModal";
import ModalContainer from "./ModalContainer";
import { hideModal, showModal } from "../redux/actions";

const TestContainer = props => {
  const openAlertModal = () => {
    props.showModal(
      {
        open: true,
        title: "Alert Modal",
        message: "WE DID IT",
        closeModal: props.closeModal
      },
      "alert"
    );
  };

  return (
    <div>
      <TestSnippet />
      <TestInput />
      {props.isAccurate && props.isComplete && openAlertModal() }
      {props.modalOpen && <TestFinishedModal />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAccurate: state.test.isAccurate,
    isComplete: state.test.isComplete,
    closeModal: state.modal.closeModal,
    showModal: state.modal.showModal,
    modalOpen: state.modal.modalProps.open
  };
};

const mapDispatchToProps = dispatch => {
    return {
      hideModal: () => dispatch(hideModal()),
      showModal: (modalProps, modalType) => {
        dispatch(showModal({ modalProps, modalType }));
      }
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(TestContainer);
