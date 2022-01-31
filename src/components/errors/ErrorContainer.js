import React from "react";
import Error from "./Error"
import MailCertify from "./MailCertify";
import PropTypes from "prop-types";

const ErrorContainer = ({errorCode}) =>{

  let viewPage;

  if(errorCode === '100') {
    viewPage = <Error
    errorComment="죄송합니다. 사용자 정보가 없습니다. 재 로그인 후 이용해주세요."
    redirectUrl="/"
    redirectPage="로그인 페이지로 이동합니다."
    />;
  } else if(errorCode === '101') {
    viewPage = <MailCertify/>;
  } else {
    viewPage = <Error
    errorComment="죄송합니다. 프로그램 오류입니다. 개발자에게 문의해주세요."
    redirectUrl="/"
    redirectPage="로그인 페이지로 이동합니다."
    />;
  }

  return (
    <>
      {viewPage}
    </>
  );
}

ErrorContainer.propTypes = {
  errorCode: PropTypes.string.isRequired,
};

export default ErrorContainer;
