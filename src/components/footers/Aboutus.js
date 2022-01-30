import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import {
  // SNSFacebookIcon,
  SNSInstagramIcon
} from "components/common/icons/Index";

function Aboutus(){
  return (
    <>
      <section className="middle_wrapper height_70">
        <Container className="py-3 px-5">
          <Row className=" row-grid align-items-center">
            <Col lg="6" className="text-center">
              <h5 className=" mb-0 font-weight-light text-center">
                Project Name
              </h5>
              <br></br>
              <h6 className=" mb-3 font-weight-light text-center">
                The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange-brown fur with a lighter underside.
                <br></br><br></br>
                Thank you 
              </h6>
              <br></br><br></br><br></br>
              <small>hison0319@gmail.com</small>
              <br></br>
            </Col>
            <Col className="text-center btn-wrapper" lg="6">
              {/* <Button
                className="btn-icon-only rounded-circle ml-1"
                color="neutral"
                href="https://www.facebook.com/his0319"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn-inner--icon">
                  <SNSFacebookIcon/>
                </span>
              </Button> */}
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
      </section>
    </>
  );
}

export default Aboutus;
