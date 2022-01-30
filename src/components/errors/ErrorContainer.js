import React from "react";
import Error from "./Error"
import MailCertify from "./MailCertify";
import PropTypes from "prop-types";

const ErrorContainer = ({errorId}) =>{

  let errorComment;
  let returnUrl;
  let error;
  let page;

  if(errorId === '100') {
    error = "BASE";
    errorComment = "죄송합니다. 프로그램 오류입니다. 개발자에게 문의해주세요.";
    returnUrl = "/";
  } else if(errorId === '200') {
    error = "BASE";
    errorComment = "죄송합니다. 사용자 정보가 없습니다. 재 로그인 후 이용해주세요.";
    returnUrl = "";
  } else if(errorId === '201') {
    error = "MAIL";
  } else {
    error = "BASE";
    errorComment = "죄송합니다. 프로그램 오류입니다. 개발자에게 문의해주세요.";
    returnUrl = "/";
  }

  if(error === "BASE") {
    page = <Error
    errorComment={errorComment}
    returnUrl={returnUrl}
    />;
  } else if(error === "MAIL") {
    page = <MailCertify/>;
  }

  return (
    <>
      {page}
    </>
  );
}

ErrorContainer.propTypes = {
  errorId: PropTypes.string.isRequired,
};

export default ErrorContainer;
