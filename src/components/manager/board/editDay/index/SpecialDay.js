import React from 'react';

import InputDay from './InputDay';
import CalenderPick from 'components/common/calendar/CalenderPick';

import {
  Row,
  Col,
  Button,
} from "reactstrap";

import {
  RemoveOptionIcon
} from "components/common/icons/Index";

function InputGroupSpDay(props) {

  const id = props.id;
  const onRemove = props.onRemove;
  const date = props.date;
  const onPickCal = props.onPickCal;

  const onRemoveClick = (id) => {
      onRemove(id);
  }

  return (
    <>
      <Row className="mt-3">
        <Col xs="1" className="text-center btn-wrapper">
          <Button
              className="btn-icon-only rounded-circle pt-2 pl-1"
              // size="sm"
              color="neutral"
              onClick={()=>{
                onRemoveClick(id);
              }}
          >
              <span className="btn-inner--icon text-secondary">
              <RemoveOptionIcon/>
              </span>
          </Button>
        </Col>
        <Col xs="11">
          <CalenderPick
          date={date}
          onPickCal={onPickCal}/>
        </Col>
      </Row>
      <Row style={{marginTop:"-10px"}}>
        <Col>
          <InputDay day={id}/>
        </Col>
      </Row>
    </>
  );
}

export default InputGroupSpDay;
