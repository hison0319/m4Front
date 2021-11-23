/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager의 수정(기능)
       API -  - get, put
*/
import React, { useState, useEffect, useContext, useRef } from 'react';
import BoardModify from './BoardModify';
import AlertModal from 'components/common/alert/AlertModal';
import ImgBox from 'components/common/imagebox/ImgBox';
import { 
  useTextInput,
  useNumberInput,
  useCheckInput
} from 'hooks';
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"
import {
  getOpeningHourCodeListAll,
  deepCopyArray,
  getIndexEqualKey,
} from 'utils/common'

async function getShopBoard(id) {
  const response = await axios.get(
    `/api/v1/shopBoard/${id}`
  );
  return response.data;
}

async function putShopBoard(board, id) {
  // console.log('### putShopBoard boardInfo : ',boardInfo);
  const response = await axios.put(
    '/api/v1/shopBoard/'+id
    ,board
  );
  return response.data;
}

// image는 인풋에 삽입 시 별도 api전송
async function putShopImages(Images, id) {
  // console.log('### putShopBoard Images : ',Images);
  const response = await axios.put(
    '/api/v1/shopBoard/'+id
    ,Images
  );
  return response.data;
}

const BoardModifyContainer = () => {
  useEffect(() => {
    // console.log('!!!BoardModifyContainer is rendering!')
  })
  const {spinner} = useContext(ProgressContext);
  const _id = 1; //temporary
  const [stateGet] = useAsync(() => getShopBoard(_id), [_id], false);
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

  // board shop date text input
  const [{ 
    varContext
  }, onChangeText] = useTextInput({
    varContext: board?board.context:"",
  });

  // board shop image input
  const [imgFileList, setImgFileList] = useState(board?board.imgFileList:[]);
  const [imageItemList, setImageItemList] = useState(board?board.imageItemList:[]);

  const handleFileOnChange = (e) => {
    e.preventDefault();
    const newImgFileList = [];
    const newImageItemList = [];
    const imgFiles = e.target.files;
    for(let imgFile of imgFiles) {
      newImgFileList.push(imgFile)
      newImageItemList.push({
        src: URL.createObjectURL(imgFile),
        altText: imgFile.name,
        caption: "",
        header: ""
      })
    }
    setImgFileList(newImgFileList);
    setImageItemList(newImageItemList);
  }
  const imagePreview = <ImgBox items={imageItemList}/>
  
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
            opriontPrice:10000,
            optionTotalCount:0,
            optionDayOfWeek:['MON','SAT','SUN',],
          },
          {
            optionId:"OO01",
            optionName:"이관호",
            opriontPrice:5000,
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
            opriontPrice:3000,
            optionTotalCount:10,
            optionDayOfWeek:[],
          },
          {
            optionId:"OO11",
            optionName:"안경",
            opriontPrice:1000,
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
  // 옵션 수정. 카테고리번호, 옵션번호, 키, 값
  const onSetOptionList = (categoryIdx, optionIdx, key, value) => {
    const newOptionList = deepCopyArray(optionList);
    if(optionIdx !== -1) { // -1이 아닌 경우 옵션 인덱스 선택으로 옵션 수정
      newOptionList[categoryIdx]["options"][optionIdx][key] = value;
    } else { // -1인 경우 옵션 카테고리 인덱스로 옵션 카테고리 수정
      newOptionList[categoryIdx][key] = value;
    }
  };
  // 옵션 삭제.
  const removeOption = (id) => {
    console.log('removeOption =>',id);
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
            opriontPrice:0,
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
    console.log("optionCategoryId",optionCategoryId);
    console.log("optionId",optionId);
    const categoryIdx = getIndexEqualKey(optionList,"optionCategoryId",optionCategoryId);
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
        opriontPrice:0,
        optionTotalCount:0,
        optionDayOfWeek:[],
      }
    );
    setOptionList(newOptionList);
  }
  // 옵션은 최소 1개 있어야함
  const alertRef = useRef();
  const optionAlert = <AlertModal
    ref={alertRef}
    comment="최소 한개의 옵션이 필요합니다."
    onSaveClick={()=>{
      //nothing
    }}
  />

  return (
    <>
      <BoardModify
      varTimeUnit={varTimeUnit}
      setTimeUnit={setTimeUnit}
      openingHourCodeList={openingHourCodeList}

      varContext={varContext}
      onChangeText={onChangeText}
      handleFileOnChange={handleFileOnChange}
      imagePreview={imagePreview}

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
      setOptionList={onSetOptionList}
      removeOption={removeOption}
      addOption={addOption}
      removeInput={removeInput}
      addInput={addInput}
      optionAlert={optionAlert}
      />
    </>
  );
};

export default BoardModifyContainer;
