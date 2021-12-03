import React, { useEffect, useRef } from "react";
import {Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import { images } from "utils/images";
import PropTypes from "prop-types";

const ImgBoxUploadTest = ({
  items,
}) => {

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

  const idxRef = useRef();
  
  useEffect(()=>{
    idxRef.current.goToIndex(0);
  })

  return (
    <>
      <section className="section section-shaped">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col className="mr-lg-auto ml-lg-auto" lg="9">
              <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                <UncontrolledCarousel
                ref={idxRef}
                items={localItems}
                indicators={false}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

ImgBoxUploadTest.propTypes = {
  items: PropTypes.array,
};

export default ImgBoxUploadTest;
