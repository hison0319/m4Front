import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import {
  BackReadIcon,
  SNSInstagramIcon,
} from "components/common/icons/index"
import PropTypes from "prop-types";

const Error = ({
  errorComment,
  returnUrl,
}) => {
  return (
    <>
      <footer className="footer py-5 px-3">
      <br></br>
        <Container>
          <Row className=" row-grid align-items-center mb-5">
            <Col lg="6" className="text-center">
              <h5 className=" mb-0 font-weight-light text-center">
                Project Name
              </h5>
              <br></br>
              <h6 className=" mb-3 font-weight-light text-center">
                {errorComment}
                <br></br><br></br>
              </h6>
              {returnUrl &&
              <Button
              className="width_90"
              color="secondary"
              outline
              type="button"
              onClick={()=>{
                window.location.href = returnUrl;
              }}>
                <span className="btn-inner--text">
                    <BackReadIcon/>&nbsp;&nbsp;돌아가기
                </span>
              </Button>}
              <br></br><br></br>
              <small>hison0319@gmail.com</small>
            </Col>
            <Col className="text-center btn-wrapper" lg="6">
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="neutral"
                href="https://instagram.com/his0319"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn-inner--icon">
                  <SNSInstagramIcon/>
                </span>
              </Button>
            </Col>
          </Row>
          <hr />
          <Row className=" align-items-center justify-content-md-between">
            <Col md="6">
              <div className=" copyright">
                © {new Date().getFullYear()}{" "}
                Creative hani &amp; Gwanho
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

Error.propTypes = {
  errorComment: PropTypes.string.isRequired,
  returnUrl: PropTypes.string.isRequired,
};

export default Error;
