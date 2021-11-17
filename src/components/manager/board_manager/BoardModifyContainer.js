/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager의 수정(기능)
       API -  - get, put
*/
import React, { useState, useEffect, useContext } from 'react';
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
import { getNationCodeListAll } from 'utils/common'

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
  
  return (
    <>
      <BoardModify
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
      />
    </>
  );
};

export default BoardModifyContainer;
