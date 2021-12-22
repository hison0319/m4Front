/*
작성자 : 손한이
작성일 : 2021.12.15
내용 :  alarmlist (뷰)
*/
import React from 'react';
import AlarmList from './AlarmList';
import PropTypes from "prop-types";

const AlarmLists = ({
  alarmLists,
  onModal,
}) => {

  return(
    <>
      {alarmLists.map((itme,idx)=>
      <AlarmList
      key={itme.period+idx}
      period={itme.period}
      alarmList={itme.alarmList}
      onModal={onModal}/>
      )}
    </>
  );
}

AlarmLists.propTypes = {
  alarmLists: PropTypes.array,
  onModal: PropTypes.func,
}

export default AlarmLists;

