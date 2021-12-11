/*
작성자 : 손한이
작성일 : 2021.11.28
내용 : shop manager의 Dashboard - 방문 고객, 매너 등급 지정 (뷰)
*/
import React, { useState, useRef } from 'react';
import { 
  Button,
  Modal,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import {
  BasicUserIcon,
  WhiteUserIcon,
  BlackUserIcon
} from "components/common/icons/Index"
import { getDotStrMax } from "utils/common"
import PropTypes from "prop-types";
import ModalView from "components/common/etc/ModalView"
import NormalProfileContainer from 'components/profile/normalProfile/NormalProfileContainer';

const Visitors = ({
  id,
  userId,
  name,
  visitDate,
  type,
  comment,
  onSetVisitorList,
}) => {
  const alertRef = useRef();
  const modalView = 
  <ModalView
    ref={alertRef}
    item={<NormalProfileContainer userId={userId}/>}
    closingModal={()=>{
      //nothing
    }}
  />;

  const [mannerType, setMannerType] = useState(type);
  const [mannerComment, setMannerComment] = useState(comment);
  
  let btnIcon;
  if(type === "W") {
    btnIcon = <WhiteUserIcon/>;
  } else if(type === "B") {
    btnIcon = <BlackUserIcon/>;
  } else {
    btnIcon = <BasicUserIcon/>;
  }

  const [addToggle, setAddToggle] = useState(false);
  const toggleModal = _addToggle => {
    setAddToggle(!_addToggle);
  };
  const onSave = () => {
    const newVisitor = {
      comment: mannerComment,
      id: "vis001",
      name: "손한이",
      type: mannerType,
      userId: "hison0319",
      visitDate: "2021-11-16",
    }
    onSetVisitorList(id, newVisitor);
  }
  return (
    <>
      <tr>
        <td className="text-center">
          <Button
            className="btn-1"
            color="neutral"
            onClick={()=>{alertRef.current.showAlert();}}
          >
            <small>
              {getDotStrMax(name,5)}
            </small>
          </Button>
        </td>
        <td className="text-center py-3">
          <small>
            {visitDate}
          </small>
        </td>
        <td className="text-center pt-2">
          <Button
          className="btn-icon-only rounded-circle"
          color="neutral"
          onClick={()=>{
            toggleModal(addToggle);
          }}
          >
            <span className="btn-inner--icon">
              {btnIcon}
            </span>
          </Button>
          <Modal
            className="modal-dialog-centered"
            isOpen={addToggle}
            toggle={() => toggleModal(addToggle)}
          >
            <div className="modal-header">
              <h6 className="modal-title" id="modal-title-default">
                {name}
              </h6>
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => toggleModal(addToggle)}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <FormGroup
            className="px-3 pt-3">
              <Label for="exampleText"><small>매너 기록(본 내용은 고객에게 보이지 않습니다.)</small></Label>
              <Input
              bsSize="sm"
              type="select"
              name="mannerType"
              id="mannerType"
              value={mannerType}
              onChange={(e)=>{
                setMannerType(e.target.value);
              }}>
                  <option value="W">화이트</option>
                  <option value="B">블랙</option>
                  <option value="N">일반</option>
              </Input>
              <Input
              type="textarea"
              name="mannerComment"
              id="mannerComment"
              value={mannerComment}
              onChange={(e)=>setMannerComment(e.target.value)}/>
            </FormGroup>
            <div className="modal-footer">
              <Button
              color="primary"
              type="button"
              onClick={() => {
              onSave()
              toggleModal(addToggle)
              }}>
                저장
              </Button>
              <Button
                className="ml-auto"
                color="link"
                data-dismiss="modal"
                type="button"
                onClick={() => toggleModal(addToggle)}
              >
                닫기
              </Button>
            </div>
          </Modal>
        </td>
      </tr>
      {modalView}
    </>
  );
}

Visitors.propTypes = {
  id: PropTypes.string,
  userId: PropTypes.string,
  name: PropTypes.string,
  visitDate: PropTypes.string,
  type: PropTypes.string,
  comment: PropTypes.string,
  onSetVisitorList: PropTypes.func,
}

export default Visitors;