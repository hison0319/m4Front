/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager의 예약 상세 내역 (뷰)
*/
import React from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  } from 'reactstrap';
import { makeMoneyType } from "utils/common"
import PropTypes from "prop-types";

const Booking = ({
  startDateTime,
  endDateTime,
  userId,
  userName,
  price,
  reservationOption,
  onModal,
}) => {

  return (
    <>
      <Row>
        <Col xs="3" className="pt-4">
          <small>{startDateTime<10?"0"+startDateTime:startDateTime}~{endDateTime<10?"0"+endDateTime:endDateTime}</small>
        </Col>
        <Col xs="9">
          <Button
            className="btn-1"
            color="neutral"
            onClick={()=>{onModal(userId)}}>
            <small style={{verticalAlign:"top"}}>
                &nbsp;&nbsp;{userName}&nbsp;님
            </small>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs="3">
        </Col>
        <Col xs="9">
          <Card>
            <CardBody className="px-3 py-3">
              <article
              className="text-secondary text-justify"
              style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}
              >
              price : {makeMoneyType(price)}
              {reservationOption && reservationOption.length > 0 &&
              reservationOption.map((item, idxC) => 
              <div className="pt-1"
              key={"CA"+idxC}>
              [ {item.optionsCategory.name} ]
                {item.optionsCategory.option.map((option,idxO)=>
                  <div
                  key={"CA"+idxO}>
                  {option.name}&nbsp;&nbsp;{option.count && option.count>1 && option.count+"개"}
                  </div>
                )}
              </div>)}
              </article>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <hr></hr>
    </>
  );
}

Booking.propTypes = {
  startDateTime: PropTypes.number,
  endDateTime: PropTypes.number,
  userId: PropTypes.string,
  userName: PropTypes.string,
  price: PropTypes.number,
  reservationOption: PropTypes.array,
  onModal: PropTypes.func,
}

export default Booking;