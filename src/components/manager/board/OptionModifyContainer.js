/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager의 board 수정 (기능)
       API -  - get, putå
*/
import React, { useState, useEffect, useContext, useRef } from 'react';
import OptionModify from './OptionModify';
import AlertModal from 'components/common/alert/AlertModal';
import { 
  useNumberInput,
} from 'hooks';
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"
import {
  getOpeningHourCodeListAll,
  deepCopyArray,
  getIndexEqualKey,
} from 'utils/common'

async function getShopOption(id) {
  const response = await axios.get(
    `/api/v1/shopBoard/${id}`
  );
  return response.data;
}

async function putShopOption(board, id) {
  const response = await axios.put(
    '/api/v1/shopBoard/'+id
    ,board
  );
  return response.data;
}

const OptionModifyContainer = () => {
  const {spinner} = useContext(ProgressContext);
  const _id = 1; //temporary
  const [stateGet] = useAsync(() => getShopOption(_id), [_id], false);
  const { loading, data: board, error } = stateGet;
 
  useEffect(() => {
    if(loading) {
      spinner.start();
    } else {
      spinner.stop();
    }
    if(error) {
      // window.location.href = '/error/100';
    }
  },[loading, error, spinner]);

  const [{ varTimeUnit }, setTimeUnit] = useNumberInput({
    varTimeUnit: board?board.timeUnit:30,
  });
  const openingHourCodeList = getOpeningHourCodeListAll();

  // #####################
  // shop oppening hour
  const week = ["MON/","TUE/","WED/","THU/","FRI/","SAT/","SUN/"];
  const [monTimeList, setMonTimeList] = useState([
    {
      key:week[0]+""+0,
      idx:0,
      startTime:8,
      endTime:12,
      startTimeRange:0,
      endTimeRange:9,
    },
    {
      key:week[0]+""+1,
      idx:1,
      startTime:14,
      endTime:19,
      startTimeRange:13,
      endTimeRange:15,
    }
  ]);
  const [tueTimeList, setTueTimeList] = useState([
    {
      key:week[1]+""+0,
      idx:0,
      startTime:12,
      endTime:18,
      startTimeRange:0,
      endTimeRange:13,
    },
    {
      key:week[1]+""+1,
      idx:1,
      startTime:19,
      endTime:22,
      startTimeRange:19,
      endTimeRange:20,
    }
  ]);
  const [wedTimeList, setWedTimeList] = useState([]);
  const [thuTimeList, setThuTimeList] = useState([]);
  const [friTimeList, setFriTimeList] = useState([]);
  const [satTimeList, setSatTimeList] = useState([]);
  const [sunTimeList, setSunTimeList] = useState([]);

  // #####################
  // shop option
  //건의 사항 : 갯수가 유효한 옵션인지, 휴무가 있는 옵션인지에 대한 컬럼 생성.
  const [optionList, setOptionList] = useState(
    board?board.optionList:
    [
      {
        optionCategoryId:"CC0",
        optionCategoryName:"사진사",
        optionsAllowMultiSelect:true,
        optionsLimited:false,
        optionsDayOfWeek:true,
        options: [
          {
            optionId:"OO00",
            optionName:"손한이",
            optionPrice:10000,
            optionTotalCount:0,
            optionDayOfWeek:['MON','SAT','SUN',],
          },
          {
            optionId:"OO01",
            optionName:"이관호",
            optionPrice:5000,
            optionTotalCount:0,
            optionDayOfWeek:['MON'],
          },
        ]
      },
      {
        optionCategoryId:"CC1",
        optionCategoryName:"소품",
        optionsAllowMultiSelect:false,
        optionsLimited:true,
        optionsDayOfWeek:false,
        options: [
          {
            optionId:"OO10",
            optionName:"가발",
            optionPrice:3000,
            optionTotalCount:10,
            optionDayOfWeek:[],
          },
          {
            optionId:"OO11",
            optionName:"안경",
            optionPrice:1000,
            optionTotalCount:5,
            optionDayOfWeek:[],
          },
        ]
      },
    ]
  );
  // key를 위한 타입 id
  const categoryKey = "CA";
  const categoryNum = useRef(0);
  // 옵션 수정.
  const onSetOptionList = (optionCategoryId, optionId, key, value) => {
    const newOptionList = deepCopyArray(optionList);
    const categoryIdx = getIndexEqualKey(optionList,"optionCategoryId",optionCategoryId);

    if(optionId) { // 옵션 아이디가 빈값이 아닌 경우 옵션 인덱스 선택으로 옵션 수정
      const optionIdx = getIndexEqualKey(newOptionList[categoryIdx]["options"],"optionId",optionId);
      newOptionList[categoryIdx]["options"][optionIdx][key] = value;
    } else { // 옵션 아이디가 빈값인 경우 옵션 카테고리 인덱스로 옵션 카테고리 수정
      newOptionList[categoryIdx][key] = value;
    }
    setOptionList(newOptionList);
  };
  // 옵션 삭제.
  const removeOption = (id) => {
    setOptionList(optionList.filter(option => option.optionCategoryId !== id));
  }
  // 옵션 추가.
  const addOption = () => {
    categoryNum.current += 1;
    const id = categoryKey + categoryNum.current;
    setOptionList(optionList.concat(
      {
        optionCategoryId:id,
        optionCategoryName:"",
        optionsAllowMultiSelect:false,
        optionsLimited:false,
        optionsDayOfWeek:false,
        options: [
          {
            optionId:id+optionKey+0,
            optionName:"",
            optionPrice:0,
            optionTotalCount:0,
            optionDayOfWeek:[],
          },
        ]
      }
    ));
  }
  // 하위 옵션 추가 및 삭제
  const optionKey = "OP";
  const optionNum = useRef(0);
  // 하위 옵션 삭제
  const removeInput = (optionCategoryId, optionId) => {
    const categoryIdx = getIndexEqualKey(optionList,"optionCategoryId",optionCategoryId);
    // 옵션은 최소 1개 있어야함
    if(optionList[categoryIdx]["options"].length === 1) {
      alertRef.current.showAlert();
      return false;
    }
    const newOptionList = deepCopyArray(optionList);
    optionList[categoryIdx]["options"] = optionList[categoryIdx]["options"].filter(option => option.optionId !== optionId);
    setOptionList(newOptionList);
  }
  // 하위 옵션 추가
  const addInput = (optionCategoryId) => {
    optionNum.current += 1;
    let id = optionCategoryId + optionKey + optionNum.current;
    const categoryIdx = getIndexEqualKey(optionList,"optionCategoryId",optionCategoryId);
    
    const newOptionList = deepCopyArray(optionList);
    newOptionList[categoryIdx]["options"].push(
      {
        optionId:id,
        optionName:"",
        optionPrice:0,
        optionTotalCount:0,
        optionDayOfWeek:[],
      }
    );
    setOptionList(newOptionList);
  }
  // 옵션 알람
  const alertRef = useRef();
  const optionAlert = <AlertModal
    ref={alertRef}
    comment="최소 한개의 옵션이 필요합니다."
    onSaveClick={()=>{
      //nothing
    }}
  />

  useEffect(()=>{
    //for develop
    console.log("OptionModifyContainer.js rendered!");
  }, []);

  return (
    <>
      <OptionModify
      varTimeUnit={varTimeUnit}
      setTimeUnit={setTimeUnit}
      openingHourCodeList={openingHourCodeList}

      week={week}
      monTimeList={monTimeList}
      setMonTimeList={setMonTimeList}
      tueTimeList={tueTimeList}
      setTueTimeList={setTueTimeList}
      wedTimeList={wedTimeList}
      setWedTimeList={setWedTimeList}
      thuTimeList={thuTimeList}
      setThuTimeList={setThuTimeList}
      friTimeList={friTimeList}
      setFriTimeList={setFriTimeList}
      satTimeList={satTimeList}
      setSatTimeList={setSatTimeList}
      sunTimeList={sunTimeList}
      setSunTimeList={setSunTimeList}

      optionList={optionList}
      onSetOptionList={onSetOptionList}
      removeOption={removeOption}
      addOption={addOption}
      removeInput={removeInput}
      addInput={addInput}
      optionAlert={optionAlert}

      />
    </>
  );
};

export default OptionModifyContainer;
