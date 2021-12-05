/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager의 board manager (기능, 뷰)
       mode R: 보기 M: 수정하기
       (작성기록이 없으면 작성하기)
       API - get
*/
import React, { useState, useRef ,useEffect, useContext } from 'react';
import {
  Container,
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
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"


async function getShopBoard(id) {
  const response = await axios.get(
    `/api/v1/shopBoard/${id}`
  );
  return response.data;
}

const BoardManager = () => {
  useEffect(() => {
    // console.log('BoardManager is rendering!')
  })

  //board 정보
  const {spinner} = useContext(ProgressContext);
  const _id = 1; //temporary
  const [state] = useAsync(() => getShopBoard(_id), [_id], false);
  const { loading, data: board, error } = state;
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
  const [imageItemList] = useState([]);
  const [shopName] = useState("한이's 편집샵");
  const [context] = useState("안녕하세요. 손한이 편집샵입니다. 잘부탁드립니다. 에~~~호 무야호~ 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.");

  const [isHave] = useState(true);
  const [mode, setMode] = useState("R");

  const alertRef = useRef();
  const goModifyText = isHave?"수정하기":"작성하기";

  const modeR = 
    <Container className="my-4">
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
        <Board
        imageItemList={imageItemList}
        shopName={shopName}
        context={context}
        />
      </div>
      }
    </Container>
    ;
  
  const modeW = 
    <Container className="my-4">
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
    </Container>
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