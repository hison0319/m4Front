import React, {  } from "react";
import ReactDatetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import {
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

function CalenderPick(props) {

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
            className="mx-2">
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
                  InputProps={{
                    readOnly: true,
                    onKeyDown: (e) => { e.preventDefault() }
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

