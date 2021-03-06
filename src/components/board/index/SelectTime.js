import React from 'react';
import {
  Row,
  Col,
  Button,
} from 'reactstrap';
import {
  TimeCheckedIcon,
  TimeUncheckedIcon
} from "components/common/icons/Index";

const SelectTime = (props) => {
  const ableTime        = props.ableTime;
  const disableTime     = props.disableTime;
  const selectTime      = props.selectTime;
  const onSelectTime    = props.onSelectTime;

  const timeList = [];
  let idx = 0;

  for(const time of ableTime) {
    if(disableTime.includes(time)) {
      timeList.push(
        <Col xs="4" key={time}>
          <Button
            id={time}
            disabled
            className="width_100"
            color="natural"
            outline
            type="button"
            onClick={()=>{
              onSelectTime(time)
            }}>
            <TimeCheckedIcon/><br></br>
            <small className="btn-inner--text">
              {time}
            </small>
          </Button>
        </Col>
      );
    } else {
      if(time === selectTime) {
        timeList.push(
          <Col xs="4" key={time}>
            <Button
              id={time}
              className="width_100 color_4 border_color_4"
              outline
              type="button"
              onClick={()=>{
                onSelectTime(time)
              }}>
              <TimeCheckedIcon/><br></br>
              <small className="btn-inner--text">
                {time}
              </small>
            </Button>
          </Col>
          );
      } else {
        timeList.push(
          <Col xs="4" key={time}>
            <Button
              id={time}
              className="width_100 color_2 border_color_2"
              outline
              type="button"
              onClick={()=>{
                onSelectTime(time)
              }}>
              <TimeUncheckedIcon/><br></br>
              <small className="btn-inner--text">
                {time}
              </small>
            </Button>
          </Col>
        );
      }
    }
    idx = idx + 1;
    if(idx%3 === 0) {
      timeList.push(<div key={idx}><br></br><br></br><br></br></div>);
    }
  }

  return (
    <div>
      <span>??????</span>
      <Row className="mt-2">
        {timeList}
      </Row>
      <br></br>
    </div>
  );
};

export default SelectTime;