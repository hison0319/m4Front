import React, { useState, forwardRef, useImperativeHandle } from 'react';

import {
  Button,
  Modal
 } from 'reactstrap';

import {
  WarningIcon
} from "components/common/icons/Index";

const AlertConfirmModal = forwardRef((props, ref) => {
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
        toggle={() => toggleModal(alertToggle)}
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
            toggleModal(alertToggle);
            }}>
            <span aria-hidden={true}>×</span>
          </Button> */}
        </div>
        <span className="pl-3 py-4 text-secondary">
          {props.comment}
        </span>
        <div className="modal-footer">
          <Button
          color="neutral"
          type="button"
          onClick={() => {
            props.onSaveClick();
            toggleModal(alertToggle);
            }}>
            확인
          </Button>
          <Button
            className="ml-auto"
            color="neutral"
            data-dismiss="modal"
            type="button"
            onClick={() => toggleModal(alertToggle)}
          >
            취소
          </Button>
        </div>
      </Modal>
    </>
  )
});
export default AlertConfirmModal;