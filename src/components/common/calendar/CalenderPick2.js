import React, { useEffect } from "react";
import ReactDatetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import {
  FormGroup,
  InputGroup,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

const CalenderPick2 = (props) => {
  useEffect(() => {
    const dateTimeInput = document.getElementById("calenderPick2").getElementsByClassName("form-control")[0]
    dateTimeInput.readOnly = true;
    dateTimeInput.style.backgroundColor = "#fff";
  },[])
  const {localDate, onPreCal, onPickCal, onNextCal} = props;

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
          <Pagination>
            <PaginationItem>
              <PaginationLink
              previous
              onClick={
                onPreCal
              }/>
            </PaginationItem>
            <PaginationItem>
              <FormGroup>
                <InputGroup
                className="mx-2"
                id="calenderPick2">
                  <ReactDatetime
                    value={localDate}
                    dateFormat="YYYY-MM-DD"
                    timeFormat={false}
                    closeOnSelect={true}
                    onChange={(e)=>{
                      if(typeof(e) === 'object' && Object.keys(e)[0] === '_isAMomentObject') {
                        onPickCal(e);
                      }
                    }}
                  />
                </InputGroup>
              </FormGroup>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
              next
              onClick={onNextCal}/>
            </PaginationItem>
          </Pagination>
        </span>
      </div>
    </>
  );
};

export default CalenderPick2;
