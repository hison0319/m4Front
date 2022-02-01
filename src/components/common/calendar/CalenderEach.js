import React from "react";

import {
  Badge
} from "reactstrap";

const CalenderEach = (props) => {
  const id        = props.id;
  const day       = props.day;
  const bookings  = props.bookings;
  const dayType   = props.dayType;

  const onPickCal = props.onPickCal;

  let dayStyle = "";
  if(dayType === -1) {
    dayStyle = "basic_color_6";
  } else if(dayType === 1) {
    dayStyle = "fix_color_3 font-weight-bold input_09em";
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
            <Badge style={{margin:0,paddding:0}} className="fix_back_color_2">
              {bookings}
            </Badge>
          }
        </small>
      </div>
    </div>
  );
};

export default CalenderEach;
