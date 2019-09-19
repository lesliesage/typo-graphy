import React from "react";
import { connect } from "react-redux";
import TestSnippet from "./TestSnippet";
import TestInput from "./TestInput";
import { showModal } from "../redux/actions";
import { Route, Switch, Link, NavLink, withRouter } from "react-router-dom";





const TestContainer = props => {
  const openFinishedModal = () => {
    props.showModal(
      {
        open: true,
        title: "Finished Modal",
        message: "WE DID IT",
        closeModal: props.closeModal
      },
      "finished"
    );
  };

  return (
    <div>
      <TestSnippet />
      <TestInput />
      {props.isAccurate && props.isComplete && openFinishedModal() }
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
    //   hideModal: () => dispatch(hideModal()),
      showModal: (modalProps, modalType) => {
        dispatch(showModal({ modalProps, modalType }));
      }
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(TestContainer);
