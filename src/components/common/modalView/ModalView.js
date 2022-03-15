import React, { useState, forwardRef, useImperativeHandle } from 'react';
import {
  Button,
  Modal
} from 'reactstrap';
import ImgSquredSmall from 'components/common/imagebox/ImgSquredSmall';
import { images } from "utils/images";

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
          <span className="btn-inner--icon">
            <ImgSquredSmall
            imageURL={images.imgLogo2}
            style={{width:"60px"}}
            />
          </span>
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
            <small>닫기</small>
          </Button>
        </div>
      </Modal>
    </>
  )
});
export default ModalView;