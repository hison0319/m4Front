import React, { useEffect } from "react";
import ReactDatetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import {
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

function CalenderPick(props) {
  useEffect(() => {
    const dateTimeInput = document.getElementById("calenderPick2").getElementsByClassName("form-control")[0]
    dateTimeInput.readOnly = true;
    dateTimeInput.style.backgroundColor = "#fff";
  })
  
  const onPickCal = props.onPickCal;
  let localDate = props.date;

  return (
    <>
      <div
      style={{
        textAlign:"center"
      }}>
        <span
        style={{
          display:"inline-block"
        }}
        >
          <FormGroup>
            <InputGroup
            className="mx-2"
            id="calenderPick2">
              <InputGroupAddon addonType="prepend">
                <InputGroupText></InputGroupText>
              </InputGroupAddon>
              <ReactDatetime
                  value={localDate}
                  dateFormat="YYYY-MM-DD"
                  timeFormat={false}
                  closeOnSelect={true}
                  onChange={(e) => {
                    if(typeof(e) === 'object' && Object.keys(e)[0] === '_isAMomentObject') {
                      onPickCal(localDate,e.format('YYYY-MM-DD'));
                    }
                  }}
              />
            </InputGroup>
          </FormGroup>
        </span>
      </div>
    </>
  );
}

export default CalenderPick;

