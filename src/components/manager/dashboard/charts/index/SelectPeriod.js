import React from 'react';
import {
  Row,
  Col,
  FormGroup,
  Input,
} from 'reactstrap';
import PropTypes from "prop-types";

const SelectPeriod = ({
  selectP,
  sPOnChange,
  date1,
  date2,
  total,
}) => {
  return (
    <div>
      <Row>
        <Col>
          <small>
            기간
          </small>
        </Col>
      </Row>
      <Row>
        <Col xs="4">
          <FormGroup>
            <Input
            type="select"
            name="select"
            value={selectP}
            onChange={(e)=>{
              sPOnChange(e.target.value);
            }}>
              <option value="PA">주</option>
              <option value="PB">한달</option>
              <option value="PC">90일</option>
              <option value="PD">1년</option>
            </Input>
          </FormGroup>
        </Col>
        <Col
        className="text-right pt-2"
        xs="8">
          <small>
            {date1} ~ {date2}
          </small>
        </Col>
      </Row>
      <Row>
        <Col
        className="text-right"
        xs="12">
          <small>total: {total}</small>
        </Col>
      </Row>
    </div>
  );
};

SelectPeriod.propTypes = {
  selectP: PropTypes.string,
  sPOnChange: PropTypes.func,
  date1: PropTypes.string,
  date2: PropTypes.string,
  total: PropTypes.number,
};

export default SelectPeriod;