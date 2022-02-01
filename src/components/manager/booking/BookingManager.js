/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager의 예약 확인 (뷰)
*/
import React from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";
import CalenderPick2 from "components/common/calendar/CalenderPick2"
import Calender from "components/common/calendar/Calender"
import TimeTable from "./index/TimeTable"
import PropTypes from "prop-types";

const BookingManager = ({
  localDate,
  onPreCal,
  onPickCal,
  onNextCal,
  calendarInfo,
  bookingsInfo,
  dayBookings,
  onModal,
}) => {
  return (
    <>
      <Container>
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
                <div className="mb-1 pb-3 mx-2">
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
                  <TimeTable
                  dayBookings={dayBookings}
                  onModal={onModal}/>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

BookingManager.propTypes = {
  localDate: PropTypes.object,
  onPreCal: PropTypes.func,
  onPickCal: PropTypes.func,
  onNextCal: PropTypes.func,
  calendarInfo: PropTypes.object,
  bookingsInfo: PropTypes.array,
  dayBookings: PropTypes.array,
  onModal: PropTypes.func,
}

export default BookingManager;
