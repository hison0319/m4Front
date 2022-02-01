/*
작성자 : 손한이
작성일 : 2021.11.21
내용 :  option Input
*/
import React, { useState } from 'react';
import {
  Row,
  Col,
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
import {
  RemoveOptionIcon,
} from "components/common/icons/Index";
import { 
  makeMoneyType,
  removeNotNumber,
} from "utils/common";
import PropTypes from "prop-types";

const InputOption = ({
  optionCategoryId,
  optionId,
  onSetOptionList,
  islimited,
  isHaveDayOfWeek,
  optionName,
  optionPrice,
  optionTotalCount,
  optionDayOfWeek,
  removeInput,
}) => {
  const [localOptionName, setLocalOptionName] = useState(optionName);
  const [localOptionPrice, setLocalOptionPrice] = useState(makeMoneyType(optionPrice));
  const [localOptionTotalCount, setLocalOptionTotalCount] = useState(optionTotalCount);
  const [localOptionDayOfWeek, setLocalOptionDayOfWeek] = useState(optionDayOfWeek?optionDayOfWeek:[]);
  
  const onSetLocalOptionDayOfWeek = (key) => {
    let newLocalOptionDayOfWeek;
    if(localOptionDayOfWeek.includes(key)) {
      newLocalOptionDayOfWeek = localOptionDayOfWeek.filter(day => day !== key);
    } else {
      newLocalOptionDayOfWeek = localOptionDayOfWeek.concat([key]);
    }
    setLocalOptionDayOfWeek(newLocalOptionDayOfWeek);
    onSetOptionList(optionCategoryId, optionId, "optionDayOfWeek", newLocalOptionDayOfWeek);
  }
  const DAYTEXT = ["월","화","수","목","금","토","일"];
  const DAYKEY = ["MON","TUE","WED","THU","FRI","SAT","SUN"];
  const DayOfWeekList = [];

  if(isHaveDayOfWeek) {
    for(let i=0; i<DAYKEY.length; i++) {
      DayOfWeekList.push(
        <FormGroup check inline key={DAYKEY[i]}>
          <Label check>
            <Input
            type="checkbox"
            checked={
              localOptionDayOfWeek.includes(DAYKEY[i])
            }
            onChange={()=>{
              onSetLocalOptionDayOfWeek(DAYKEY[i]);
            }}
            />
            <small>
              {DAYTEXT[i]}
            </small>
          </Label>
        </FormGroup>
      );
    }
  }

  return (
    <>
      <Row className="my-2">
        <Col>
          <Row>
            <Col>
                <small>옵션 이름</small>
            </Col>
          </Row>
          <Row>
            <Col xs="2" className="text-center btn-wrapper">
              <Button
                className="btn-icon-only rounded-circle pt-1 pl-1"
                color="neutral"
                onClick={()=>{
                  removeInput(optionCategoryId, optionId);
                }}
              >
                <small className="btn-inner--icon text-secondary">
                  <RemoveOptionIcon/>
                </small>
              </Button>
            </Col>
            <Col xs="10">
              <Input
              type="text"
              id={optionId+"optionName"}
              name={optionId+"optionName"}
              value={localOptionName || ''}
              maxLength={30}
              placeholder=""
              onChange={(e) =>{
                setLocalOptionName(e.target.value);
                onSetOptionList(optionCategoryId, optionId, "optionName", e.target.value);
              }}/>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs="6" >
          <InputGroup className="my-1">
            <InputGroupAddon addonType="prepend">¥</InputGroupAddon>
            <Input 
            className="text-right"
            type="text"
            id={optionId+"optionPrice"}
            name={optionId+"optionPrice"}
            value={localOptionPrice || ''}
            maxLength={12}
            placeholder="가격" 
            onChange={(e) =>{
              const newValue = makeMoneyType(e.target.value);
              setLocalOptionPrice(newValue);
              onSetOptionList(optionCategoryId, optionId, "optionPrice", newValue);
            }}
            />
          </InputGroup>
        </Col>
        <Col xs="6" >
          <InputGroup className="my-1">
            <InputGroupAddon addonType="prepend">EA</InputGroupAddon>
            <Input  
            disabled={!islimited}
            className="text-right"
            type="text"
            id={optionId+"optionTotalCount"}
            name={optionId+"optionTotalCount"}
            value={localOptionTotalCount || ''}
            maxLength={3}
            placeholder="개수" 
            onChange={(e) =>{
              const newValue = removeNotNumber(e.target.value);
              setLocalOptionTotalCount(newValue);
              onSetOptionList(optionCategoryId, optionId, "optionTotalCount", newValue);
            }} 
            />
          </InputGroup>
        </Col>
      </Row>
      {isHaveDayOfWeek &&
      <Row>
        <Col>
          <Row>
            <Col>
              <small>
                휴무일 : 
              </small>
            </Col>
          </Row>
          <Row className="mt-1">
            <Col className="text-right">
              {DayOfWeekList}
            </Col>
          </Row>
        </Col>
      </Row>}
    </>
  );
};

InputOption.propTypes = {
  optionCategoryId: PropTypes.string.isRequired,
  optionId: PropTypes.string.isRequired,
  onSetOptionList: PropTypes.func,
  islimited: PropTypes.bool,
  isHaveDayOfWeek: PropTypes.bool,
  optionName: PropTypes.string,
  optionPrice: PropTypes.number,
  optionTotalCount: PropTypes.number,
  optionDayOfWeek: PropTypes.array,
  removeInput: PropTypes.func,
}

export default InputOption;
