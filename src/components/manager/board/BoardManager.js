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
import {
  ModifyIcon,
} from "components/common/icons/Index";

const BoardManager = () => {
  useEffect(() => {
    // console.log('BoardManager is rendering!')
  })
  const [mode, setMode] = useState("B");

  const modeB = 
    <Container className="my-4">
      <div className="text-center btn-wrapper">
          <Button
          style={{width:"90%"}}
          color="info"
          outline
          type="button"
          onClick={()=>{
            setMode("O");
          }}>
          <span className="btn-inner--text">
            <ModifyIcon/>&nbsp;&nbsp;옵션 수정
          </span>
          </Button>
      </div>
      <BoardModifyContainer/>
    </Container>
    ;
  
  const modeO = 
    <Container className="my-4">
      <div className="text-center btn-wrapper">
          <Button
          style={{width:"90%"}}
          color="info"
          outline
          type="button"
          onClick={()=>{
            setMode("B");
          }}>
          <span className="btn-inner--text">
            <ModifyIcon/>&nbsp;&nbsp;게시글 수정
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