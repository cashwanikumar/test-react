import React, { useState, PureComponent } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class SimpleModal extends PureComponent {
  state = {
    modal: false,
    renderMethod: null,
    title: "",
  };

  setStateData = (title, renderMethod) => {
    this.setState({
      ...this.state,
      renderMethod: renderMethod,
      title: title,
      modal: true
    });
  };

  toggle = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    const { title, renderMethod, modal } = this.state;
    return (
      <div>
        <Modal isOpen={modal} toggle={this.toggle} size="lg">
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ModalBody>{renderMethod && renderMethod()}</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SimpleModal;
