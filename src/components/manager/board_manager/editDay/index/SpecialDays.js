import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';

import SpecialDay from './SpecialDay';
import AlertModal from 'components/common/alert/AlertModal';

import {
  Row,
  Col,
  Button,
} from "reactstrap";

const InputGroupSpDay = React.memo(() => {
  useEffect(() => {
    // console.log('InputNormalDay is rendering!')
  });

  const alertRef = useRef();
  const idNum = useRef(0);
  const [dayList] = useState([moment().format('YYYY-MM-DD')]);
  const DAYID = "SPE/";
  
  // const [specialDayList, setSpecialDayList] = useState([{key:DAYID+idNum.current, id:DAYID+idNum.current, date:dayList[idNum.current]}]);
  const [specialDayList, setSpecialDayList] = useState([]);

  console.log('dayList',dayList);
  console.log('specialDayList',specialDayList);
  
  const removeSpecialDay = (id) => {
    setSpecialDayList(specialDayList.filter(specialDay => specialDay.id !== id));
  }
  const onPickCal = (oldDate, newDate) => {
    //만약 같은 날자가 있다면 false
    if(specialDayList.find(specialDay => specialDay.date === newDate)) {
      if(oldDate!==newDate) {
        alertRef.current.showAlert();
      }
      return false;
    }
    let index =  specialDayList.findIndex(specialDay => specialDay.date === oldDate);
    let dayTemp =  specialDayList.find(specialDay => specialDay.date === oldDate);
    dayTemp.date = newDate;
    dayList.splice(index, 1, newDate);
    let specialDayListTemp = JSON.parse(JSON.stringify(specialDayList));
    specialDayListTemp.splice(index, 1, dayTemp);
    setSpecialDayList(specialDayListTemp);
  }
  const addSpecialDay = () => {
    let id = DAYID + idNum.current + "/";
    
    let maxDay = dayList.reduce(function (pre, cur) {
      return pre > cur? pre: cur;
    });
    dayList.push(moment(maxDay).add(1,'days').format('YYYY-MM-DD'));
    setSpecialDayList(specialDayList.concat({key:id, id:id, date:dayList[idNum.current]}));
    idNum.current += 1;
  }

  return (
    <>
      <Row className="mt-1">
        <Col >
          {specialDayList.map((item) => 
            <SpecialDay
            key={item.id}
            id={item.id}
            date={item.date}
            onRemove={removeSpecialDay} onPickCal={onPickCal}/>
          )}
          <Row>
            <Col>
              <div className="text-center btn-wrapper my-3">
                <Button
                className="width_100"
                color="secondary"
                outline
                size="sm"
                type="button"
                onClick={()=>{
                  addSpecialDay();
                }}>
                <span className="btn-inner--text">
                  특별한 날이 더 있어요. (추가하기)
                </span>
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <AlertModal
        ref={alertRef}
        comment="겹치는 날짜가 있습니다."
        onSaveClick={()=>{
          //nothing
        }}
      />
    </>
  );
});

export default InputGroupSpDay;
