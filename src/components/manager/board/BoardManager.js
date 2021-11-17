/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager의 board manager (뷰)
       mode R: 보기 M: 수정하기
       (작성기록이 없으면 작성하기)
*/
import React, { useState, useRef ,useEffect } from 'react';

import {
  Button
 } from 'reactstrap';
// core components
import Board from "components/board/Board";
import AlertConfirmModal from 'components/common/alert/AlertConfirmModal';
import BoardModifyContainer from "./BoardModifyContainer";

import {
  ModifyIcon,
  BackReadIcon
} from "components/common/icons/Index"

function BoardManager() {
  useEffect(() => {
    // console.log('BoardManager is rendering!')
  })

  const [isHave] = useState(true);
  const [mode, setMode] = useState("R");

  const alertRef = useRef();
  const goModifyText = isHave?"수정하기":"작성하기";

  const modeR = 
    <section className="my-4">
      <div className="text-center btn-wrapper">
          <Button
          style={{width:"90%"}}
          color="info"
          outline
          type="button"
          onClick={()=>{
            setMode("M");
          }}>
          <span className="btn-inner--text">
            <ModifyIcon/>&nbsp;&nbsp;{goModifyText}
          </span>
          </Button>
      </div>
      {isHave &&
      <div
      className="mb-3"
      style={{marginTop:-40}}>
        <Board/>
      </div>
      }
    </section>
    ;
  
  const modeW = 
    <section className="my-4 mx-4">
      <div className="text-center btn-wrapper">
          <Button
          style={{width:"90%"}}
          color="info"
          outline
          type="button"
          onClick={()=>{
            alertRef.current.showAlert();
          }}>
          <span className="btn-inner--text">
            <BackReadIcon/>&nbsp;&nbsp;보기
          </span>
          </Button>
      </div>
      <BoardModifyContainer/>
    </section>
    ;

  return (
    <>
      {
        mode==="R"?
        modeR:
        modeW
      }
      <AlertConfirmModal
        ref={alertRef}
        comment="저장하지 않고 돌아가면 수정사항이 사라질 수 있습니다. 돌아가겠습니까?"
        onSaveClick={()=>{
          setMode("R");
        }}
      />
    </>
  )
}
export default BoardManager;