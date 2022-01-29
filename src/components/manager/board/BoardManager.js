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
  useEffect(() => {
    // console.log('BoardManager is rendering!')
  })
  const [mode, setMode] = useState("O");

  const modeB = 
    <Container className="my-4">
      <div className="text-center btn-wrapper my-2">
          <Button
          className="width_100 sub_button1 color_3 border_color_3"
          outline
          type="button"
          onClick={()=>{setMode("O")}}>
          <span className="btn-inner--text">
            옵션 수정
          </span>
          </Button>
      </div>
      <BoardModifyContainer/>
    </Container>
    ;
  
  const modeO = 
    <Container className="my-4">
      <div className="text-center btn-wrapper my-2">
          <Button
          className="width_100 sub_button1 color_3 border_color_3"
          outline
          type="button"
          onClick={()=>{setMode("B")}}>
          <span className="btn-inner--text">
            게시글 수정
          </span>
          </Button>
      </div>
      <OptionModifyContainer/>
    </Container>
    ;

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