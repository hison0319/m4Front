import React from "react";
import ReactDatetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import {
  Row,
  Col,
  FormGroup,
  InputGroup
} from "reactstrap";

function CalenderPeriod() {
  return (
    <>
      <Row>
        <Col>
          <FormGroup>
            <InputGroup
            className="mx-2">
              <ReactDatetime
                //value={}
                dateFormat="YYYY-MM-DD"
                timeFormat={false}
                className="input_08em"
                closeOnSelect={true}
                //onChange={}
              />
            </InputGroup>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <InputGroup
            className="mx-2">
              <ReactDatetime
                //value={}
                dateFormat="YYYY-MM-DD"
                timeFormat={false}
                className="input_08em"
                closeOnSelect={true}
                //onChange={}
              />
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>
    </>
  );
}

export default CalenderPeriod;
