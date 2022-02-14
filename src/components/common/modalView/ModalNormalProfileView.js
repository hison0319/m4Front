import React, { useState, forwardRef, useImperativeHandle } from 'react';
import {
  Button,
  Modal
} from 'reactstrap';
import NormalProfileContainer from 'components/profile/normalProfile/NormalProfileContainer';
import ImgSquredSmall from 'components/common/imagebox/ImgSquredSmall';
import { images } from "utils/images";

const ModalNormalProfileView = forwardRef(({
  closingModal,
}, ref) => {
  const onClosingModal = closingModal?closingModal:()=>{return false}

  const [alertToggle, setAlertToggle] = useState(false);
  const [userId, setUserId] = useState("");

  const toggleModal = _alertToggle => {
    setAlertToggle(!_alertToggle);
  };

  useImperativeHandle(ref, () => ({
    showAlert() {
      setAlertToggle(true);
    },
    onSetUserId(userId) {
      setUserId(userId);
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
        <NormalProfileContainer userId={userId}/>
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
export default ModalNormalProfileView;