/*
작성자 : 손한이
작성일 : 2022.01.31
내용 :  계정 관리 화면
*/
import React, { useRef, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import ModalView from "components/common/modalView/ModalView";
import SignupContainer from "./SignupContainer"
import SigninContainer from "./SigninContainer"
import DeleteMember from "./DeleteMember";
import axios from "axios";

function test() {
  axios({
    method: "get",
    url: "http://3.36.163.171:8080/oauth2/authorization/line",
  }).then(function (response) {
    console.log(response);
  }).catch(function (e){
    console.log(e);
  });
}

const Account = ({
  isModalOpen
}) => {
  const SigninModalRef = useRef();
  const SignupModalRef = useRef();
  const DeleteMemberModalRef = useRef();

  const SigninModal = <ModalView
  ref={SigninModalRef}
  item={<SigninContainer/>}
  closingModal={()=>{
      //nothing
  }}
  />
  const SignupModal = <ModalView
  ref={SignupModalRef}
  item={<SignupContainer/>}
  closingModal={()=>{
      //nothing
  }}
  />
  const DeleteMemberModal = <ModalView
  ref={DeleteMemberModalRef}
  item={<DeleteMember/>}
  closingModal={()=>{
      //nothing
  }}
  />

  useEffect(()=>{
    //for develop
    console.log("Account.js rendered!");
  }, []);

  let sectionClassName = isModalOpen?"middle_wrapper height_70":"middle_wrapper height_tight"

  return (
    <section className={sectionClassName}>
      <Container className="my-5 py-5">
        {SigninModal}
        {SignupModal}
        {DeleteMemberModal}
        <Row className="my-3">
          <Col className="my-2">
            <div className="text-center btn-wrapper">
                <Button
                className="main_button width_80 color_2 border_color_2"
                color="none"
                onClick={()=>{
                  // test();
                  window.location.href = "http://localhost:8080/oauth2/authorization/line";
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
        <Row className="my-3">
          <Col className="my-2">
            <div className="text-center btn-wrapper">
                <Button
                className="main_button width_80 color_2 border_color_2"
                color="none"
                onClick={()=>{
                  DeleteMemberModalRef.current.showAlert();
                }}>
                <span className="btn-inner--text">
                  계정 삭제(admin)
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
