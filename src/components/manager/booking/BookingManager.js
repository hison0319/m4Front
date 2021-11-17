import React, { useEffect } from "react";
import {
  Row,
  Col
} from "reactstrap";

import CalenderPick2 from "components/common/calendar/CalenderPick2"
import Calender from "components/common/calendar/Calender"
import TimeTable from "./index/TimeTable"

const BookingManager = (props) => {
  useEffect(() => {
    // console.log('BookingManager is rendering!')
  })

  // For CalenderPick2
  const localDate = props.localDate;
  const onPreCal  = props.onPreCal;
  const onPickCal = props.onPickCal;
  const onNextCal = props.onNextCal;

  // For Calender
  const calendarInfo = props.calendarInfo;
  const bookingsInfo = props.bookingsInfo;

  return (
    <>
      <Row >
        <Col className="my-4 py-2">
          <Row>
            <Col>
              <div>
                <CalenderPick2
                localDate = {localDate}
                onPreCal  = {onPreCal}
                onPickCal = {onPickCal}
                onNextCal = {onNextCal}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="mb-1 pb-3">
                <Calender
                calendarInfo = {calendarInfo}
                bookingsInfo = {bookingsInfo}
                onPickCal    = {onPickCal}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="mb-3">
                <TimeTable/>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default BookingManager;
