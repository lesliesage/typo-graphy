import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";

class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidUpdate(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        modalIsOpen: nextProps.modalProps.open
      });
    }
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  completionTime() {
    const res = this.props.currentTestResults;
    const start = res[0][3];
    const end = res[res.length - 1][3];
    return res[0] ? ((end - start) / 1000).toFixed(2) : "x";
  }

  render() {
    console.log(this.props.currentTestResults)
    if (!this.props.modalType) {
      return null;
    }
    return (
      <div>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={this.closeModal}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h2 ref={subtitle => (this.subtitle = subtitle)}>
            completed in {this.completionTime()} seconds
          </h2>
          <Link to="/stats" onClick={this.closeModal}>
            view your stats
          </Link>
        </ReactModal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.modal,
    // currentTestResults: state.test.currentTestResults
    ...state.test
  };
};

export default connect(
  mapStateToProps,
  null
)(ModalContainer);
