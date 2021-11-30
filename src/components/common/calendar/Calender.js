import React, { useRef, useEffect } from "react";

import {
  Table,
  Row,
  Col
} from "reactstrap";

import CalenderEach from "./CalenderEach";
import moment from "moment";

const Calender = React.memo((props) => {
  const calendarId = props.calendarId?props.calendarId:"calendar";
  const calendarInfo = props.calendarInfo;
  const bookingsInfo = props.bookingsInfo?props.bookingsInfo:[];

  const date      = calendarInfo.date;
  const dateform  = calendarInfo.dateform;
  const year      = calendarInfo.year;
  const month     = calendarInfo.month;
  //const day       = calendarInfo.day;
  //const week      = calendarInfo.week;
  const days      = calendarInfo.days;

  const monthStr = String(month).length<2?"0"+String(month):String(month);
  
  const preMonthDays = date.clone().subtract(1,'months').daysInMonth();
  const preYear      = month===1?date.clone().subtract(1,'years').year():year;
  const nextYear     = month===12?date.clone().add(1,'years').year():year;
  const preMonth     = date.clone().subtract(1,'months').month()+1;
  const nextMonth    = date.clone().add(1,'months').month()+1;
  const firstDayWeek = moment(year+monthStr+'01','YYYY-MM-DD').day();
  const lastDayWeek  = moment(year+monthStr+days,'YYYY-MM-DD').day();
  
  const preMonthStr  = String(preMonth).length<2?"0"+String(preMonth):String(preMonth);
  const nextMonthStr = String(nextMonth).length<2?"0"+String(nextMonth):String(nextMonth);

  const onPickCal = props.onPickCal;
  const onPickCalEach = (date) => {
    const momentDate = moment(date);
    onPickCal(momentDate);
  }

  const onTouchCalRef = useRef();
  const calendarIdRef = useRef();
  useEffect(() => {
    onTouchCalRef.current = onTouchCal;
    calendarIdRef.current = calendarId;
  });
  const onTouchCal = (flag) => {
    // console.log(date.clone().add(1,'months'));
    flag === 1 ? onPickCal(date.clone().add(1,'months')) : onPickCal(date.clone().subtract(1,'months'));
  };

  useEffect(() => {
    // console.log('Calender is rendering!')
    let touchstartX;
    let touchstartY;
    let touchendX;
    let touchendY;
    let touchoffsetX;
    let touchoffsetY;
    let touch;
    let target = document.getElementById(calendarIdRef.current);

    function preventDefault(e) {
      e.preventDefault();
    }

    target.addEventListener('touchstart', function(e) {
      touch = e.touches[0];
      touchstartX = touch.clientX;
      touchstartY = touch.clientY;
    }, false);
    
    target.addEventListener('touchend', function(e) {
      if(e.touches.length === 0) {
        touch = e.changedTouches[e.changedTouches.length - 1];
        touchendX = touch.clientX;
        touchendY = touch.clientY;
  
        touchoffsetX = touchendX - touchstartX;
        touchoffsetY = touchendY - touchstartY;
  
        if(Math.abs(touchoffsetX) >= 60 && Math.abs(touchoffsetY) <= 30) {
          if(touchoffsetX < 0) {
            target.addEventListener('touchmove',preventDefault);
            setTimeout(function() {
              target.removeEventListener('touchmove',preventDefault);
            }, 500);
            onTouchCalRef.current(1);
          } else {
            target.addEventListener('touchmove',preventDefault);
            setTimeout(function() {
              target.removeEventListener('touchmove',preventDefault);
            }, 500);
            onTouchCalRef.current(0);
          }
        }
      }
    }, false);
  },[])

  // console.log('date',date);
  // console.log('dateform',dateform);
  // console.log('year',year);
  // console.log('month',month);
  // console.log('day',day);
  // console.log('week',week);
  // console.log('days',days);
  // console.log('preMonthDays',preMonthDays);
  // console.log('firstDayWeek',firstDayWeek);
  // console.log('lastDayWeek',lastDayWeek);
  // console.log('preYear',preYear);
  // console.log('nextYear',nextYear);
  // console.log('preMonthStr',preMonthStr);
  // console.log('nextMonthStr',nextMonthStr);

  let cals = [];
  let idTemp = "";
  let dayStrTemp = "";
  let bookingsTemp = 0;
  let dayTypeTemp = 0;

  console.log('Calender bookingsInfo : ',bookingsInfo);

  // 전 월 출력
  let i = firstDayWeek===0?7:firstDayWeek;
  let dayTemp = preMonthDays - (i-1);
  for(i; i>0; i--) {
    dayStrTemp = String(dayTemp);
    idTemp = preYear + "-" + preMonthStr + "-" + dayStrTemp;
    for(let j=0; j<bookingsInfo.length; j++) {
      if(idTemp === String(bookingsInfo[j].date)) {
        bookingsTemp = bookingsInfo[j].num;
      }
    }
    cals.push(<td key={idTemp}><CalenderEach id={idTemp} day={dayTemp} bookings={bookingsTemp} dayType={-1} onPickCal={onPickCalEach}/></td>);
    bookingsTemp = 0;
    dayTemp = dayTemp + 1;
  }

  i = days;
  dayTemp = 1;
  // 현재 월 출력
  for(i; i>0; i--) {
    dayStrTemp = String(dayTemp);
    dayStrTemp = dayStrTemp.length<2?"0"+dayStrTemp:dayStrTemp;
    idTemp = year + "-" + monthStr + "-" + dayStrTemp;
    for(let j=0; j<bookingsInfo.length; j++) {
      if(idTemp === String(bookingsInfo[j].date)) {
        bookingsTemp = bookingsInfo[j].num;
      }
    }
    if(idTemp === dateform) dayTypeTemp = 1;
    cals.push(<td key={idTemp}><CalenderEach id={idTemp} day={dayTemp} bookings={bookingsTemp} dayType={dayTypeTemp} onPickCal={onPickCalEach}/></td>);
    bookingsTemp = 0;
    dayTypeTemp = 0;
    dayTemp = dayTemp + 1;
  }
  
  i = lastDayWeek===6?-1:lastDayWeek;
  dayTemp = 1;
  // 다음 월 출력
  for(i; i<6; i++) {
    dayStrTemp = String(dayTemp);
    dayStrTemp = dayStrTemp.length<2?"0"+dayStrTemp:dayStrTemp;
    idTemp = nextYear + "-" + nextMonthStr + "-" + dayStrTemp;
    for(let j=0; j<bookingsInfo.length; j++) {
      if(idTemp === String(bookingsInfo[j].date)) {
        bookingsTemp = bookingsInfo[j].num;
      }
    }
    cals.push(<td key={idTemp}><CalenderEach id={idTemp} day={dayTemp} bookings={bookingsTemp} dayType={-1} onPickCal={onPickCalEach}/></td>);
    bookingsTemp = 0;
    dayTemp = dayTemp + 1;
  }
  cals.reverse();

  const calsView = () => {
    let calsRtn = [];
    for(let i=0; i<7; i++) {
      calsRtn.push(cals.pop())
    }
    return calsRtn;
  }

  return (
    <>
      <Row>
      <Col xs="12">
      <Table
      borderless
      id={calendarId}>
        <thead>
          <tr>
            <th className="text-danger">
            <small className="font_bold">Sun</small>
            </th>
            <th>
            <small className="font_bold">Mon</small>
            </th>
            <th>
            <small className="font_bold">Tue</small>
            </th>
            <th>
            <small className="font_bold">Wed</small>
            </th>
            <th>
            <small className="font_bold">Thu</small>
            </th>
            <th>
            <small className="font_bold">Fri</small>
            </th>
            <th className="text-danger">
            <small className="font_bold">Sat</small>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {calsView()}
          </tr>
          <tr>
            {calsView()}
          </tr>
          <tr>
            {calsView()}
          </tr>
          <tr>
            {calsView()}
          </tr>
          <tr>
            {calsView()}
          </tr>
          <tr>
            {calsView()}
          </tr>
        </tbody>
      </Table>
      </Col>
      </Row>
    </>
  );
});

export default Calender;
