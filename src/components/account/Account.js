import React, { useRef } from "react";
import { images } from "utils/images";
import {
  Button,
  CardImg
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
    <>
      {SigninModal}
      {SignupModal}
      <CardImg
      alt=""
      src={images.imgTest1}
      top
      width="100%"
      />
      <div className="text-center btn-wrapper">
          <Button
          className="width_100"
          color="info"
          outline
          type="button"
          onClick={()=>{
            window.location.href = "http://3.36.163.171:8080/oauth2/authorization/line";
          }}>
          <span className="btn-inner--text">
            일반계정 로그인
          </span>
          </Button>
      </div>
      <div className="text-center btn-wrapper">
          <Button
          className="width_100"
          color="info"
          outline
          type="button"
          onClick={()=>{
            SigninModalRef.current.showAlert();
          }}>
          <span className="btn-inner--text">
            사업자계정 로그인
          </span>
          </Button>
      </div>
      <div className="text-center btn-wrapper">
          <Button
          className="width_100"
          color="info"
          outline
          type="button"
          onClick={()=>{
            SignupModalRef.current.showAlert();
          }}>
          <span className="btn-inner--text">
            사업자 계정 가입
          </span>
          </Button>
      </div>
    </>
  );
}

export default Account;
