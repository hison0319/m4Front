/*
작성자 : 손한이
작성일 : 2021.12.15
내용 :  alarmlist (뷰)
*/
import React from 'react';
import {
  ListGroup,
} from 'reactstrap';
import Alarm from './Alarm';
import PropTypes from "prop-types";

const AlarmList = ({
  period,
  alarmList,
  onModal,
}) => {

  return(
    <ListGroup flush>
      <div className='pt-2 px-2'>
        <small>{period}</small>  
      </div>
      {alarmList.map((item)=>
      <Alarm
      key={item.alarmId}
      type={item.type}
      userId={item.userId}
      name={item.name}
      context={item.context}
      regDate={item.regDate}
      reviewId={item.reviewId}
      bookingDate={item.bookingDate}
      onModal={onModal}/>
      )}
      <hr style={{padding:0, margin:0, border:1}}></hr>
    </ListGroup>
  );
}

AlarmList.propTypes = {
  period: PropTypes.string,
  alarmList: PropTypes.array,
  onModal: PropTypes.func,
}

export default AlarmList;

