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
    // console.log('CalenderPick2 is rendering!')
  })
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
                className="mx-2">
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
                    readOnly={true}
                    onKeyDown={(e) => {e.preventDefault()}}
                    // InputProps={{
                    //   readOnly: true,
                    //   onKeyDown: (e) => { e.preventDefault() }
                    // }}`
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
