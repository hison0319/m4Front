import React, { useState, forwardRef, useImperativeHandle } from 'react';
import {
  Button,
  Modal
} from 'reactstrap';

const ModalView = forwardRef(({
  closingModal,
  item,
}, ref) => {
  const onClosingModal = closingModal?closingModal:()=>{return false}

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
          <small className="fix_color_2">mmmm</small>
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
        {item}
        <div className="modal-footer">
          <Button
          color="neutral"
          type="button"
          onClick={() => {
            onClosingModal();
            toggleModal(alertToggle);
            }}>
            닫기
          </Button>
        </div>
      </Modal>
    </>
  )
});
export default ModalView;