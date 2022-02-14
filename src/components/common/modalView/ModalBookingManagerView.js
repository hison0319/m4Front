import React, { useState, forwardRef, useImperativeHandle } from 'react';
import {
  Button,
  Modal
} from 'reactstrap';
import BookingManagerContainer from 'components/manager/booking/BookingManagerContainer';
import moment from 'moment';
import ImgSquredSmall from 'components/common/imagebox/ImgSquredSmall';
import { images } from "utils/images";

const ModalBookingManagerView = forwardRef(({
  closingModal,
}, ref) => {
  const onClosingModal = closingModal?closingModal:()=>{return false}

  const [alertToggle, setAlertToggle] = useState(false);
  const [date, setDate] = useState();

  const toggleModal = _alertToggle => {
    setAlertToggle(!_alertToggle);
  };

  useImperativeHandle(ref, () => ({
    showAlert() {
      setAlertToggle(true);
    },
    onSetDate(date) {
      const propDate = moment(date,'YYYY-MM-DD');
      setDate(propDate);
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
        <BookingManagerContainer propDate={date}/>
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
export default ModalBookingManagerView;