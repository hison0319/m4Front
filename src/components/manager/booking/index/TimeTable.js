/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager의 타임테이블 (뷰)
*/
import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import Booking from './Booking';
import PropTypes from "prop-types";

const TimeTable = ({ 
  dayBookings,
  onModal,
}) => {
  return (
    <Row className="px-4">
      <Col>
        <Row>
          <Col xs="3">
            <span>시간</span>
          </Col>
          <Col xs="9">
            <span>내역</span>
          </Col>
        </Row>
        <hr></hr>
        {dayBookings && dayBookings.length > 0 ?
        dayBookings.map((item, idx)=>
          <Booking
          key={"booking"+idx}
          startDateTime={item.startDateTime}
          endDateTime={item.endDateTime}
          userId={item.userId}
          userName={item.userName}
          price={item.price}
          reservationOption={item.reservationOption}
          onModal={onModal}/>
        )
        :<small>내역이 없습니다.</small>}
      </Col>
    </Row>
  );
}

TimeTable.propTypes = {
  dayBookings: PropTypes.array,
  onModal: PropTypes.func,
}

export default TimeTable;