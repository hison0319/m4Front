/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager의 board manager(뷰)
       mode O: 옵션 수정 B: 게시글 수정
*/
import React, { useState, useEffect } from 'react';
import {
  Container,
  Button
 } from 'reactstrap';
import BoardModifyContainer from "./BoardModifyContainer";
import OptionModifyContainer from "./OptionModifyContainer";

const BoardManager = () => {
  const [mode, setMode] = useState("B");

  const modeB = 
    <Container className="my-4">
      <BoardModifyContainer/>
      <div className="text-center btn-wrapper my-2">
          <Button
          className="width_100 sub_button2 color_2 border_color_2"
          outline
          type="button"
          onClick={()=>{setMode("O")}}>
          <span className="btn-inner--text">
            옵션 수정
          </span>
          </Button>
      </div>
    </Container>
    ;
  
  const modeO = 
    <Container className="my-4">
      <OptionModifyContainer/>
      <div className="text-center btn-wrapper my-2">
          <Button
          className="width_100 sub_button2 color_2 border_color_2"
          outline
          type="button"
          onClick={()=>{setMode("B")}}>
          <span className="btn-inner--text">
            게시글 수정
          </span>
          </Button>
      </div>
    </Container>
    ;

  useEffect(()=>{
    //for develop
    console.log("BoardManager.js rendered!");
  }, []);

  return (
    <>
      {
        mode==="B"?
        modeB:
        modeO
      }
    </>
  )
}
export default BoardManager;