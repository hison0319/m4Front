import React, { useState, forwardRef, useImperativeHandle } from 'react';

import {
  Button,
  Modal
 } from 'reactstrap';

import {
  WarningIcon
} from "components/common/icons/Index";

const AlertModal = forwardRef((props, ref) => {
  const onClosingModal = props.closingModal?props.closingModal:()=>{return false}

  const [alertToggle, setAlertToggle] = useState(false);

  const toggleModal = _alertToggle => {
    setAlertToggle(!_alertToggle);
  };

  useImperativeHandle(ref, () => ({
    showAlert() {
      setAlertToggle(true);
    }
  }));

  return (
    <>
      <Modal
        className="modal-dialog-centered"
        isOpen={alertToggle}
        toggle={() => {
          onClosingModal();
          toggleModal(alertToggle)
        }}
      >
        <div className="modal-header">
          <div>
            <WarningIcon/>
          </div>
          {/* <Button
          aria-label="Close"
          className="close"
          data-dismiss="modal"
          type="button"
          onClick={() => {
            onClosingModal();
            toggleModal(alertToggle);
            }}>
            <span aria-hidden={true}>×</span>
          </Button> */}
        </div>
        <span className="px-4 pt-4 pb-5 h6 text-secondary font-weight-light">
          {props.comment}
        </span>
        <div className="modal-footer">
          <Button
          color="neutral"
          type="button"
          onClick={() => {
            onClosingModal();
            toggleModal(alertToggle);
            }}>
            확인
          </Button>
        </div>
      </Modal>
    </>
  )
});
export default AlertModal;