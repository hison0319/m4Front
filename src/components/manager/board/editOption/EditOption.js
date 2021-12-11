/*
작성자 : 손한이
작성일 : 2021.11.21
내용 :  edit option 뷰
*/
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Options from './index/Options';
import {
  ListDownIcon,
  ListUpIcon,
} from "components/common/icons"
import {
  Row,
  Col,
  Collapse
} from "reactstrap";
import PropTypes from "prop-types";

const EditOption = React.memo(({
  optionList,
  onSetOptionList,
  removeOption,
  addOption,
  removeInput,
  addInput,
}) => {
  const [editOpen, setEditOpen] = useState(optionList && optionList.length !== 0?true:false);
  const toggleEdit = () => setEditOpen(!editOpen);

  const downIcon = <span className="ml-2"><ListDownIcon/></span>;
  const upIcon = <span className="ml-2"><ListUpIcon/></span>;

  return (
    <>
      <Row>
        <Col>
          <Row className="mt-3 py-1" style={{backgroundColor:"#ddd"}}>
            <Col xs="12">
              <Link
              className="text-secondary default-link"
              onClick={(e) => {
                      e.preventDefault();
                      toggleEdit();
                  }
              }
              to=""
              >
                &nbsp;&nbsp;우리는 옵션이 있어요.
                {editOpen?upIcon:downIcon}
              </Link>
            </Col>
          </Row>
          <Row className="my-2">
            <Col>
              <Collapse isOpen={editOpen}>
                <Options
                optionList={optionList}
                onSetOptionList={onSetOptionList}
                removeOption={removeOption}
                addOption={addOption}
                removeInput={removeInput}
                addInput={addInput}/>
              </Collapse>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
});

EditOption.propTypes = {
  optionList: PropTypes.array,
  onSetOptionList: PropTypes.func,
  removeOption: PropTypes.func,
  addOption: PropTypes.func,
  removeInput: PropTypes.func,
  addInput: PropTypes.func,
}

export default EditOption
