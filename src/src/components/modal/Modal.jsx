import React from 'react';
import BSModal from 'react-bootstrap/Modal';
import {Button} from "react-bootstrap";

const Modal = ({
                 propTitle = '',
                 propShow = false,
                 propSize = 'xl',
                 modalOption,
                 setModalOption,
                 children
               }) => {

  const handleClose = () => setModalOption(prev => ({
    ...prev,
    show: false
  }));

  return (
      <BSModal
          show={propShow}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          size={propSize}
          centered
          backdrop="static"
          keyboard={false}
      >
        <BSModal.Header closeButton>
          <BSModal.Title>{propTitle}</BSModal.Title>
        </BSModal.Header>
        <BSModal.Body>
          {children}
        </BSModal.Body>
        {/*<BSModal.Footer
            className={"justify-content-center"}
        >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={modalOption.confirm}>
            Save Changes
          </Button>
        </BSModal.Footer>*/}
      </BSModal>
  );
};

export default Modal;
