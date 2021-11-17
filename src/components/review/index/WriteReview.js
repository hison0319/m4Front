import React, { useState } from "react";

import {
  Button,
  Modal,
  Row,
  Col,
  FormGroup,
  InputGroup,
  Label,
  Input
} from "reactstrap";
  
import {
  HeartIcon,
  WriteCommentIcon,
} from "components/common/icons/Index"

function WriteReview(){
  const [writeToggle, setWriteToggle] = useState(false);
  const toggleModal = _writeToggle => {
    setWriteToggle(!_writeToggle);
  };
  const [selectScore, setSelectScore] = useState("5");

  return (
    <>
      <Row>
        <Col>
          <div className="text-center">
            <Button
              block
              className="width_90 display-inline"
              color="primary"
              type="button"
              // disabled={true}
              onClick={() => toggleModal(writeToggle)}
            >
              <WriteCommentIcon/>&nbsp;&nbsp;리뷰 작성하기
            </Button>
          </div>
          <Modal
            className="modal-dialog-centered"
            isOpen={writeToggle}
            toggle={() => toggleModal(writeToggle)}
          >
            <div className="modal-header">
              <h6 className="modal-title" id="modal-title-default">
                손한이
              </h6>
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => toggleModal(writeToggle)}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <FormGroup
            className="px-2 mt-3">
              <InputGroup>
                <Label className="width_70">
                  여기에 리뷰를 작성해주세요! (최대 500자)
                </Label>
                <div className="width_10 text-right pr-2">
                  <HeartIcon/>
                </div>
                <div className="width_20">
                  <Input
                  bsSize="sm"
                  type="select"
                  name="select"
                  id="exampleSelect"
                  value={selectScore}
                  onChange={(e)=>{
                    console.dir(e.target.value)
                    setSelectScore(e.target.value);
                  }}>
                      <option value="5">5.0</option>
                      <option value="4">4.0</option>
                      <option value="3">3.0</option>
                      <option value="2">2.0</option>
                      <option value="1">1.0</option>
                  </Input>
                </div>
              </InputGroup>
              <Input
              className="mt-2"
              type="textarea"
              name="text"
              id="exampleText"
              rows="5" />
            </FormGroup>
            <div className="modal-footer">
              <Button color="primary" type="button">
                저장하기
              </Button>
              <Button
                className="ml-auto"
                color="link"
                data-dismiss="modal"
                type="button"
                onClick={() => toggleModal(writeToggle)}
              >
                닫기
              </Button>
            </div>
          </Modal>
        </Col>
      </Row>
    </>
  );
}

export default WriteReview;
