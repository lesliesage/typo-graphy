import React from "react";
import { connect } from "react-redux";
import ReactModal from "react-modal";

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        modalIsOpen: nextProps.modalProps.open
      });
    }
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
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
            completed in x seconds
          </h2>
          <button onClick={this.closeModal}>view your stats</button>
        </ReactModal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.modal
});

export default connect(
  mapStateToProps,
  null
)(ModalContainer);
