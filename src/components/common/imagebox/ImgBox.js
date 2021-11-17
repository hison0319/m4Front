import React from "react";
import {Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import { images } from "utils/images";
import PropTypes from "prop-types";

const ImgBox = ({items}) => {

  const localItems = (items && Array.isArray(items) && items.length > 0)?items:[
    {
      src: images.imgTest1,
      altText: "",
      caption: "",
      header: ""
    },
    {
      src: images.imgTest2,
      altText: "",
      caption: "",
      header: ""
    },
  ];
  
  return (
    <>
      <section className="section section-shaped">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col className="mr-lg-auto ml-lg-auto" lg="9">
              <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                <UncontrolledCarousel items={localItems} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

ImgBox.propTypes = {
  items: PropTypes.array,
};

export default ImgBox;
