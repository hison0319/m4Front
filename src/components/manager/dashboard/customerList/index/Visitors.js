/*
작성자 : 손한이
작성일 : 2021.11.28
내용 : shop manager의 Dashboard - 방문 고객, 매너 등급 지정 (기능, 뷰)
      API - put
*/
import React, { useState } from 'react';
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

const Visitors = ({
  id,
  userId,
  name,
  visitDate,
  type,
  onSetVisitorList,
}) => {
  const [toggleWhite, setToggleWhite] = useState(type==="W"?true:false);
  const [toggleBlack, setToggleBlack] = useState(type==="B"?true:false);

  const _BasicUserIcon = <BasicUserIcon/>;
  const _WhiteUserIcon = <WhiteUserIcon/>;
  const _BlackUserIcon = <BlackUserIcon/>;

  const [mannerType, setMannerType] = useState(type);

  let btnIcon;
  if(type === "W") {
    btnIcon = <WhiteUserIcon/>;
  } else if(type === "B") {
    btnIcon = <BlackUserIcon/>;
  } else {
    btnIcon = <BasicUserIcon/>;
  }

  const [addToggle, setAddToggle] = useState(false);
  // var mode = ""; //W or B
  const toggleModal = _addToggle => {
    // alert(mode);
    setAddToggle(!_addToggle);
  };
  const onSave = () => {
    onSetVisitorList(id, "type", mannerType)
  }
  return (
    <>
      <tr>
        {/* <th scope="row">1</th> */}
        <td className="text-center">
          <Button
            className="btn-1"
            color="neutral"
            href={"/profile?userId="+userId}
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
              <Label for="exampleText">매너 기록(본 내용은 고객에게 보이지 않습니다.)</Label>
              <Input
              bsSize="sm"
              type="select"
              name="mannerType"
              id="mannerType"
              value={mannerType}
              onChange={(e)=>{
                console.dir(e.target.value)
                setMannerType(e.target.value);
              }}>
                  <option value="W">화이트</option>
                  <option value="B">블랙</option>
                  <option value="N">일반</option>
              </Input>
              <Input
              type="textarea"
              name="text"
              id="exampleText" />
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
    </>
  );
}

Visitors.VisitorList = {
  id: PropTypes.string,
  userId: PropTypes.string,
  name: PropTypes.string,
  visitDate: PropTypes.string,
  type: PropTypes.string,
  onSetVisitorList: PropTypes.func,
}

export default Visitors;