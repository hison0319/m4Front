import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import PropTypes from "prop-types";

const Error = ({
  errorComment,
  redirectUrl,
  redirectPage,
}) => {
  let second;
  let s = 0;

  useEffect(()=>{
    if(document.getElementById("second")) {
      second = document.getElementById("second")
      second.innerText = "5";
      s = 5;
      let inv = setInterval(() => {
        s = s - 1;
        if(s <= 0) {
          clearInterval(inv);
          window.location.href = redirectUrl;
        }
        else {
          second.innerText = s;
        }
      }, 1000);
    }
  },[]);

  return (
    <>
      <section className="middle_wrapper height_tight">
        <Container className="my-5 py-5 px-5">
          <div className="font-weight-light text-center">
            <span className="errorImg"/>
          </div>
          <Row className="mb-5 pb-5">
            <Col>
              <h5 className="font-weight-light text-center">
                {errorComment}
              </h5>
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <div className="font-weight-light text-center">
                <span id="second"></span>초 후 <br></br>{redirectPage}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

Error.propTypes = {
  errorComment: PropTypes.string.isRequired,
  redirectUrl: PropTypes.string,
  redirectPage: PropTypes.string,
};

export default Error;
