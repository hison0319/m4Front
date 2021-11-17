import React, { useState } from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  } from 'reactstrap';

function Booking() {

  const [readToggle, setReadToggle] = useState(false);

  return (
    <>
      <Row>
        <Col xs="3">
          <small>08~09</small>
        </Col>
        <Col xs="9">
          <Card className="shadow">
            <CardBody className="px-1 py-1">
              <Button
              color="link default-link">
                  <article
                  className="text-secondary text-justify txt_review"
                  style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}
                  onClick={function(e) {
                      setReadToggle(!readToggle);
                      if(readToggle) {
                          e.target.classList.add('txt_review');
                      } else {
                          e.target.classList.remove('txt_review');
                      }
                  }}>
                  내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 
                  </article>
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <hr></hr>
    </>
  );

}

export default Booking;