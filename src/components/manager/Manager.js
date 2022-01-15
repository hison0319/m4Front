import React, { useRef } from "react";
import {
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import ModalView from "components/common/modalView/ModalView";
import BoardManager from "./board/BoardManager";
import BookingManagerContainer from "./booking/BookingManagerContainer";
import Dashboard from "./dashboard/Dashboard";

const Manager = () => {
  const boardModalRef = useRef();
  const bookingModalRef = useRef();
  const dashboardModalRef = useRef();

  const boardModal = <ModalView
  ref={boardModalRef}
  item={<BoardManager/>}
  closingModal={()=>{
      //nothing
  }}
  />
  const bookingModal = <ModalView
  ref={bookingModalRef}
  item={<BookingManagerContainer/>}
  closingModal={()=>{
      //nothing
  }}
  />
  const dashboardModal = <ModalView
  ref={dashboardModalRef}
  item={<Dashboard/>}
  closingModal={()=>{
      //nothing
  }}
  />

  return (
    <section className="middle_wrapper">
      <Container>
        {boardModal}
        {bookingModal}
        {dashboardModal}
          <Row className="my-5">
            <Col className="my-2">
              <div className="text-center btn-wrapper">
                  <Button
                  className="main_button color_3 border_color_3"
                  color="info"
                  outline
                  type="button"
                  onClick={()=>{
                    boardModalRef.current.showAlert();
                  }}>
                  <span className="btn-inner--text">
                    게시글 관리
                  </span>
                  </Button>
              </div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col className="my-2">
              <div className="text-center btn-wrapper">
                  <Button
                  className="main_button color_3 border_color_3"
                  color="info"
                  outline
                  type="button"
                  onClick={()=>{
                    bookingModalRef.current.showAlert();
                  }}>
                  <span className="btn-inner--text">
                    예약 관리
                  </span>
                  </Button>
              </div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col className="my-2">
              <div className="text-center btn-wrapper">
                  <Button
                  className="main_button color_3 border_color_3"
                  color="info"
                  outline
                  type="button"
                  onClick={()=>{
                    dashboardModalRef.current.showAlert();
                  }}>
                  <span className="btn-inner--text">
                    대쉬보드
                  </span>
                  </Button>
              </div>
            </Col>
          </Row>
      </Container>
    </section>
  );
}

export default Manager;
