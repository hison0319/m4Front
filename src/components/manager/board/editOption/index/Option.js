/*
작성자 : 손한이
작성일 : 2021.11.21
내용 :  option 뷰, 기능
*/
import React, { useState, useRef }  from 'react';
import InputOption from './InputOption';
import {
  Row,
  Col,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  CustomInput,
} from "reactstrap";
import {
  RemoveOptionIcon,
  AddOptionIcon,
} from "components/common/icons/Index"
import PropTypes from "prop-types";

const Option = ({
  optionCategoryId,
  optionCategoryName,
  optionsAllowMultiSelect,
  optionsLimited,
  optionsDayOfWeek,
  options,
  onSetOptionList,
  onRemove,
  removeInput,
  addInput,
}) => {
  const [categoryName, setCategoryName] = useState(optionCategoryName);
  const [isAllowMultiSelect, setIsAllowMultiSelect] = useState(optionsAllowMultiSelect);
  const [islimited, setIslimited] = useState(optionsLimited);
  const [isHaveDayOfWeek, setIsHaveDayOfWeek] = useState(optionsDayOfWeek);

  

  return (
    <>
      <Row className="my-1">
        <Col xs="1" className="text-center btn-wrapper">
          <Button
            className="btn-icon-only rounded-circle pt-1 pl-1"
            color="neutral"
            onClick={()=>{
              onRemove(optionCategoryId);
            }}
          >
            <span className="btn-inner--icon text-secondary">
              <RemoveOptionIcon/>
            </span>
          </Button>
        </Col>
        <Col xs="11">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText></InputGroupText>
            </InputGroupAddon>
            <Input
            type="text"
            name="categoryName"
            id="categoryName"
            value={categoryName}
            maxLength={50}
            placeholder="옵션 종류"
            onChange={(e)=>{
              setCategoryName(e.target.value);
              onSetOptionList(optionCategoryId, "", "categoryName", e.target.value);
            }}/>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col className="mx-3">
            <div className="text-right mt-3">
              <CustomInput
              type="switch"
              id={"optionsAllowMultiSelect"+optionCategoryId}
              name={"optionsAllowMultiSelect"+optionCategoryId}
              label="동시에 여러개를 선택할 수 있습니다."
              className="text-secondary" 
              checked={isAllowMultiSelect}
              onChange={()=>{
                setIsAllowMultiSelect(!isAllowMultiSelect);
                onSetOptionList(optionCategoryId, "", "optionsAllowMultiSelect", !isAllowMultiSelect);
              }}/>
            </div>
            <div className="text-right mt-3">
              <CustomInput
              type="switch"
              id={"optionsLimited"+optionCategoryId}
              name={"optionsLimited"+optionCategoryId}
              label="갯수 제한이 있습니다."
              className="text-secondary" 
              checked={islimited}
              onChange={()=>{
                setIslimited(!islimited);
                onSetOptionList(optionCategoryId, "", "optionsLimited", !islimited);
              }}/>
            </div>
            <div className="text-right mt-3 mb-3">
              <CustomInput
              type="switch"
              id={"optionsDayOfWeek"+optionCategoryId}
              name={"optionsDayOfWeek"+optionCategoryId}
              label="휴무 요일이 있습니다."
              className="text-secondary" 
              checked={isHaveDayOfWeek}
              onChange={()=>{
                setIsHaveDayOfWeek(!isHaveDayOfWeek);
                onSetOptionList(optionCategoryId, "", "optionsDayOfWeek", !isHaveDayOfWeek);
              }}/>
            </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {options.map((item) => 
            <InputOption
            key={item.optionId}
            optionCategoryId={optionCategoryId}
            optionId={item.optionId}
            onSetOptionList={onSetOptionList}
            islimited={islimited}
            isHaveDayOfWeek={isHaveDayOfWeek}
            optionName={item.optionName}
            optionPrice={item.optionPrice}
            optionTotalCount={item.optionTotalCount}
            optionDayOfWeek={item.optionDayOfWeek}
            removeInput={removeInput}/>
          )}
        </Col>
      </Row>
      <Row className="mt-1 mb-3">
        <Col>
          <Button
            className="width_100"
            outline
            size="sm"
            color="secondary"
            onClick={()=>{
              addInput(optionCategoryId);
            }}
          >
            <span className="btn-inner--icon">
              <AddOptionIcon/>
            </span>
          </Button>
        </Col>
      </Row>
    </>
  );
};

Option.propTypes = {
  optionCategoryId: PropTypes.string.isRequired,
  optionCategoryName: PropTypes.string,
  optionsAllowMultiSelect: PropTypes.bool,
  optionsLimited: PropTypes.bool,
  optionsDayOfWeek: PropTypes.bool,
  options: PropTypes.array,
  onSetOptionList: PropTypes.func,
  onRemove: PropTypes.func,
  removeInput: PropTypes.func,
  addInput: PropTypes.func,
}

export default Option;
