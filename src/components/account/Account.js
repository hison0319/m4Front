import React, { useRef } from "react";
import {
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import ModalView from "components/common/modalView/ModalView";
import Signin from "./Signin";
import Signup from "./Signup";

const Account = () => {
  const SigninModalRef = useRef();
  const SignupModalRef = useRef();

  const SigninModal = <ModalView
  ref={SigninModalRef}
  item={<Signin/>}
  closingModal={()=>{
      //nothing
  }}
  />
  const SignupModal = <ModalView
  ref={SignupModalRef}
  item={<Signup/>}
  closingModal={()=>{
      //nothing
  }}
  />

  return (
    <section className="middle_wrapper height_70">
      <Container className="my-5 py-5">
        {SigninModal}
        {SignupModal}
        <Row className="my-3">
          <Col className="my-2">
            <div className="text-center btn-wrapper">
                <Button
                className="main_button width_80 color_2 border_color_2"
                color="none"
                onClick={()=>{
                  window.location.href = "http://3.36.163.171:8080/oauth2/authorization/line";
                }}>
                <span>
                  일반계정 로그인
                </span>
                </Button>
            </div>
          </Col>
        </Row>
        <Row className="my-3">
          <Col className="my-2">
            <div className="text-center btn-wrapper">
                <Button
                className="main_button width_80 color_2 border_color_2"
                color="none"
                onClick={()=>{
                  SigninModalRef.current.showAlert();
                }}>
                <span className="btn-inner--text">
                  사업자계정 로그인
                </span>
                </Button>
            </div>
          </Col>
        </Row>
        <Row className="my-3">
          <Col className="my-2">
            <div className="text-center btn-wrapper">
                <Button
                className="main_button width_80 color_2 border_color_2"
                color="none"
                onClick={()=>{
                  SignupModalRef.current.showAlert();
                }}>
                <span className="btn-inner--text">
                  사업자 계정 가입
                </span>
                </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Account;
