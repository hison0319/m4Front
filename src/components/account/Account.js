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
import AlertConfirmModal from "components/common/alert/AlertConfirmModal";
import axios from "axios";
import { 
  deleteCookie,
  getCookie
} from "utils/common"

function test() {
  axios({
    method: "get",
    url: `${process.env.REACT_APP_API_URL}oauth2/authorization/line`,
  }).then(function (response) {
    console.log(response);
  }).catch(function (e){
    console.log(e);
  });
}

const Account = ({
  isModalOpen
}) => {
  const signinModalRef = useRef();
  const signupModalRef = useRef();
  const signoutModalRef = useRef();
  const deleteMemberModalRef = useRef();

  const signinModal = <ModalView
  ref={signinModalRef}
  item={<SigninContainer/>}
  closingModal={()=>{
      //nothing
  }}
  />
  const signupModal = <ModalView
  ref={signupModalRef}
  item={<SignupContainer/>}
  closingModal={()=>{
      //nothing
  }}
  />
  const signoutModal = <AlertConfirmModal
  ref={signoutModalRef}
  comment="로그아웃 하겠습니까?"
  onConfirm={()=>{
    deleteCookie("accessToken");
    setTimeout(function() {
      window.location.href = '/';
    }, 100);
  }}
  closingModal={()=>{
    //nothing
  }}
  />
  const deleteMemberModal = <ModalView
  ref={deleteMemberModalRef}
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
        {signinModal}
        {signupModal}
        {signoutModal}
        {deleteMemberModal}
        <Row className="my-3">
          <Col className="my-2">
            <div className="text-center btn-wrapper">
                <Button
                className="main_button width_80 color_2 border_color_2"
                color="none"
                onClick={()=>{
                  // test();
                  window.location.href = "http://localhost:8080/oauth2/authorization/line?redirect_uri=http://localhost:3000"
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
                  signinModalRef.current.showAlert();
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
                  signupModalRef.current.showAlert();
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
                  signoutModalRef.current.showAlert();
                }}>
                <span className="btn-inner--text">
                  로그 아웃
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
                  deleteMemberModalRef.current.showAlert();
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
