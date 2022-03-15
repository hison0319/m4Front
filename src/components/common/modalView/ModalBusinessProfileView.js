import React, { useState, forwardRef, useImperativeHandle } from 'react';
import {
  Button,
  Modal
} from 'reactstrap';
import BusinessProfileContainer from 'components/profile/businessProfile/BusinessProfileContainer';
import ImgSquredSmall from 'components/common/imagebox/ImgSquredSmall';
import { images } from "utils/images";

const ModalBusinessProfileView = forwardRef(({
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
        <BusinessProfileContainer userId={userId}/>
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
export default ModalBusinessProfileView;