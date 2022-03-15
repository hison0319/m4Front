import React, { useRef, useEffect, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import ModalView from "components/common/modalView/ModalView";
import ShopRegisterContainer from "./ShopRegisterContainer";
import BoardManager from "./board/BoardManager";
import BookingManagerContainer from "./booking/BookingManagerContainer";
import Dashboard from "./dashboard/Dashboard";
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"

async function getShop(id) {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}shop/${id}`
  );
  return response.data;
}

const Manager = () => {

  const shopRegisterRef = useRef();
  const boardModalRef = useRef();
  const bookingModalRef = useRef();
  const dashboardModalRef = useRef();

  const shopRegisterModal = <ModalView
  ref={shopRegisterRef}
  item={<ShopRegisterContainer/>}
  closingModal={()=>{
      //nothing
  }}
  />
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
  useEffect(()=>{
    //forDevelop
    console.log("Manager.js rendered!");
    // window.location.href = '/error/200';
  }, []);

  // 가게 정보 조회
  let hasNotShop = true;

  const {spinner} = useContext(ProgressContext);
  const memberId = 1; //temporary
  const [stateGet] = useAsync(() => getShop(memberId), [memberId], false);
  const { loading, data: shop, error } = stateGet;
 
  useEffect(() => {
    if(loading) {
      console.log(shop);
      spinner.start();
    } else {
      spinner.stop();
    }
    if(error) {
      hasNotShop = error.response.errorCode === 301;
    } else {
      hasNotShop = false;
    }
  },[loading, error, spinner]);

  return (
    <section className="middle_wrapper height_tight">
      <Container>
        {shopRegisterModal}
        {boardModal}
        {bookingModal}
        {dashboardModal}
          {hasNotShop?
          <Row className="my-3">
            <Col className="my-2">
              <div className="text-center btn-wrapper">
                  <Button
                  className="main_button width_80 color_3 border_color_3"
                  color="none"
                  outline
                  type="button"
                  onClick={()=>{
                    shopRegisterRef.current.showAlert();
                  }}>
                  <span className="btn-inner--text">
                    게시글 등록
                  </span>
                  </Button>
              </div>
            </Col>
          </Row>:
          <Row className="my-3">
            <Col className="my-2">
              <div className="text-center btn-wrapper">
                  <Button
                  className="main_button width_80 color_3 border_color_3"
                  color="none"
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
          </Row>}
          <Row className="my-3">
            <Col className="my-2">
              <div className="text-center btn-wrapper">
                  <Button
                  className="main_button width_80 color_3 border_color_3"
                  color="none"
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
          <Row className="my-3">
            <Col className="my-2">
              <div className="text-center btn-wrapper">
                  <Button
                  className="main_button width_80 color_3 border_color_3"
                  color="none"
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
