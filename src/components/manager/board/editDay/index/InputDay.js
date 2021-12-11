/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager의 수정 - Opening Hour 옵션 수정 - 일반 Opening Hour 수정
       겹치는 시간 자동 조정,
       유효하지 않은 시간 선택 방지
       상위 컴포넌트로 시간 리스트를 전달하는 함수 => setTimeList
*/
import React, { useState, useEffect } from 'react';
import InputTime from './InputTime';
import {
  Button,
  Row,
  Col,
} from "reactstrap";
import {
  AddOptionIcon
} from "components/common/icons/Index";
import {
  chkNullAndUndefined,
  deepCopyArray,
  getValueArray,
} from "utils/common";
import PropTypes from "prop-types";

const InputDay = React.memo(({
  day,
  timeList,
  setTimeList,
}) => {
  const DAYID = day;

  const [idxList, setIdxList] = useState(timeList?getValueArray(timeList,'idx'):[]);
  const [startTimeList, setStartTimeList] = useState(timeList?getValueArray(timeList,'startTime'):[]);
  const [endTimeList, setEndTimeList] = useState(timeList?getValueArray(timeList,'endTime'):[]);
  const [inputTimeList, setInputTimeList] = useState(timeList?timeList:[]);
  const [buttonAbled, setButtonAbled] = useState(false);

  useEffect(() => {
    // console.log('##### InputNormalDay is rendering!');
    checkButtonAbled();
  });

  const removeInputTime = (idx) => {
    let newidxList = deepCopyArray(idxList);
    let newStartTimeList = deepCopyArray(startTimeList);
    let newEndTimeList = deepCopyArray(endTimeList);
    newidxList.pop();
    newStartTimeList.splice(idx,1);
    newEndTimeList.splice(idx,1);
    setIdxList(newidxList);
    setStartTimeList(newStartTimeList);
    setEndTimeList(newEndTimeList);
    resetInputTimeList(newStartTimeList,newEndTimeList);
  }

  const addInputTime = () => {
    const idx = idxList.length;
    const key = DAYID + idx;
    let currentStartTime;
    let currentEndTime;
    if(chkNullAndUndefined(startTimeList[startTimeList.length-1])) {
      currentStartTime = -1;
      currentEndTime = 0;
    } else {
      currentStartTime = Number(endTimeList[endTimeList.length-1]);
      currentEndTime = currentStartTime+1;
    }
    const newStartTimeList = startTimeList.concat([currentStartTime+1]);
    const newEndTimeList = endTimeList.concat([currentEndTime+1]);
    const newTimeList = inputTimeList.concat({
      key:key,
      idx:idx,
      startTime:currentStartTime+1,
      endTime:currentEndTime+1,
      startTimeRange:currentStartTime+1,
      endTimeRange:currentEndTime+1,
    })
    setIdxList(idxList.concat([idx]));
    setStartTimeList(newStartTimeList);
    setEndTimeList(newEndTimeList);
    setTimeList(newTimeList);
    setInputTimeList(newTimeList);
  }

  const onSetStartTime = (idx, time) => {
    const newTime = Number(time);
    let newStartTimeList = deepCopyArray(startTimeList);
    let newEndTimeList = deepCopyArray(endTimeList);

    newStartTimeList.splice(idx,1,newTime);

    const newTimes = setTimes(newStartTimeList,newEndTimeList, idx);

    setIdxList(newTimes.newidxList);
    setStartTimeList(newTimes.newStartTimeList);
    setEndTimeList(newTimes.newEndTimeList);
    resetInputTimeList(newStartTimeList,newEndTimeList);
  }

  const onSetEndTime = (idx, time) => {
    const newTime = Number(time);
    let newStartTimeList = deepCopyArray(startTimeList);
    let newEndTimeList = deepCopyArray(endTimeList);
    
    newEndTimeList.splice(idx,1,newTime);
    if(idx < newStartTimeList.length-1 && newStartTimeList[idx+1] < newTime) {
      newStartTimeList.splice(idx+1,1,newTime+1);
    }
    const newTimes = setTimes(newStartTimeList,newEndTimeList, idx+1);

    setIdxList(newTimes.newidxList);
    setStartTimeList(newTimes.newStartTimeList);
    setEndTimeList(newTimes.newEndTimeList);
    resetInputTimeList(newStartTimeList,newEndTimeList);
  }

  const setTimes = (newStartTimeList, newEndTimeList, idx) => {
    for(let i=idx;i<newStartTimeList.length-1;i++) {
      if(newStartTimeList[i]>=newStartTimeList[i+1]) {
        newStartTimeList.splice(i+1,1,newStartTimeList[i]+2);
      }
    }
    for(let i=idx;i<newEndTimeList.length;i++) {
      if(newStartTimeList[i]>=newEndTimeList[i]) {
        newEndTimeList.splice(i,1,newStartTimeList[i]+1);
      }
    }
    newStartTimeList = newStartTimeList.filter(item => {
      return item < 24;
    })
    newEndTimeList = newEndTimeList.filter(item => {
      return item < 25;
    })
    let newidxList = [];
    for(let i=0; i<newStartTimeList.length; i++) {
      newidxList.push(i);
    }
    return {newStartTimeList, newEndTimeList, newidxList};
  }

  const resetInputTimeList = (newStartTimeList,newEndTimeList) => {
    const newInputTimeList = [];
    for(let i=0; i<newStartTimeList.length; i++) {
      newInputTimeList.push({
        key:DAYID+i,
        idx:i,
        startTime:newStartTimeList[i],
        endTime:newEndTimeList[i],
        startTimeRange:newEndTimeList[i-1]?newEndTimeList[i-1]+1:0,
        endTimeRange:newStartTimeList[i]+1,
      })
      if(newStartTimeList[i]>=23 || newEndTimeList[i]>=23) break;
    }
    setTimeList(newInputTimeList);
    setInputTimeList(newInputTimeList);
  }

  const checkButtonAbled = () => {
    const chkVal = Number(endTimeList[endTimeList.length-1]);
    if(chkVal >= 23) {
      setButtonAbled(true);
    } else {
      setButtonAbled(false);
    }
  }

  return (
    <>
      {inputTimeList.map((item) => 
        <InputTime
        key={item.key}
        idx={item.idx}
        startTime={item.startTime}
        endTime={item.endTime}
        startTimeRange={item.startTimeRange}
        endTimeRange={item.endTimeRange}
        onRemove={removeInputTime}
        onSetStartTime={onSetStartTime}
        onSetEndTime={onSetEndTime}
        />
      )}
      <Row className="mt-2">
        <Col>
          <Button
            className="width_100"
            outline
            size="sm"
            color="secondary"
            onClick={()=>{
              addInputTime();
            }}
            disabled={buttonAbled}
          >
            <span
            className="btn-inner--icon">
              <AddOptionIcon/>
            </span>
          </Button>
        </Col>
      </Row>
    </>
  );
});

InputDay.propTypes = {
  day: PropTypes.string,
  timeList: PropTypes.array,
  setTimeList: PropTypes.func,
};

export default InputDay;
