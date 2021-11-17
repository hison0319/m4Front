import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';

import Booking from './Booking';

function TimeTable() {
  
  return (
    <Row className="px-4">
      <Col>
        <Row>
          <Col xs="3">
            <h6>시간</h6>
          </Col>
          <Col xs="9">
            <h6>내역</h6>
          </Col>
        </Row>
        <hr></hr>
        <Booking/>
        <Booking/>
        <Booking/>
        <Booking/>
      </Col>
    </Row>
  );
}

export default TimeTable;