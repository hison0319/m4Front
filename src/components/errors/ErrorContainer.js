import React from "react";
import Error from "./Error"
import PropTypes from "prop-types";

const ErrorContainer = ({errorId}) =>{

  let errorComment
  let returnUrl

  if(errorId === '100') {
    errorComment = "죄송합니다. 프로그램 오류입니다. 개발자에게 문의해주세요.";
    returnUrl = "/";
  } else if(errorId === '200') {
    errorComment = "죄송합니다. 사용자 정보가 없습니다. 재 로그인 후 이용해주세요.";
    returnUrl = "";
  } else {
    errorComment = "죄송합니다. 프로그램 오류입니다. 개발자에게 문의해주세요.";
    returnUrl = "/";
  }

  return (
    <>
      <Error
      errorComment={errorComment}
      returnUrl={returnUrl}
      />
    </>
  );
}

ErrorContainer.propTypes = {
  errorId: PropTypes.string.isRequired,
};

export default ErrorContainer;
