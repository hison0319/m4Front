import React, { useEffect } from "react";

import {
  Badge
} from "reactstrap";

const CalenderEach = (props) => {
  useEffect(() => {
    // console.log(props.id+' CalenderEach is rendering!')
  })
  const id        = props.id;
  const day       = props.day;
  const bookings  = props.bookings;
  const dayType   = props.dayType;

  const onPickCal = props.onPickCal;

  let dayStyle = "";
  if(dayType === -1) {
    dayStyle = "text-secondary";
  } else if(dayType === 1) {
    dayStyle = "text-primary font-weight-bold";
  }

  return (
    <div
    id = {id}
    onClick={()=>{
      onPickCal(id);
    }}>
      <small
      className={dayStyle}
      >
        {day}
      </small>
      <div
      className="height_20">
        <small>
          {bookings>0 &&
            <Badge style={{margin:0,paddding:0}} color="info">
              {bookings}
            </Badge>
          }
        </small>
      </div>
    </div>
  );
};

export default CalenderEach;
