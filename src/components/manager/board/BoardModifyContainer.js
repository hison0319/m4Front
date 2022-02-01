/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager의 board 수정 (기능)
       API -  - get, put
*/
import React, { useState, useEffect, useContext } from 'react';
import BoardModify from './BoardModify';
import { useTextInput } from 'hooks';
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"

async function getShopBoard(id) {
  const response = await axios.get(
    `/api/v1/shopBoard/${id}`
  );
  return response.data;
}

async function putShopBoard(board, id) {
  const response = await axios.put(
    '/api/v1/shopBoard/'+id
    ,board
  );
  return response.data;
}

// image는 인풋에 삽입 시 별도 api전송
async function putShopImages(Images, id) {
  const response = await axios.put(
    '/api/v1/shopBoard/'+id
    ,Images
  );
  return response.data;
}

const BoardModifyContainer = () => {
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

  // #####################
  // shop introduce text input
  const [{ 
    varContext
  }, onChangeText] = useTextInput({
    varContext: board?board.context:"",
  });

  // #####################
  // shop image input
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

  useEffect(()=>{
    //for develop
    console.log("BoardModifyContainer.js rendered!");
  }, []);
  
  return (
    <>
      <BoardModify
      varContext={varContext}
      onChangeText={onChangeText}
      handleFileOnChange={handleFileOnChange}
      imageItemList={imageItemList}
      />
    </>
  );
};

export default BoardModifyContainer;
