import React, { useState } from 'react';
import {
  Row,
  Col,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
import {
  RemoveOptionIcon,
} from "components/common/icons/Index"
import { 
  modifyArray,
  makeMoneyType,
  removeNotNumber,
} from "utils/common"

const InputOption = React.memo(({
  id,
  onRemove,
  limitedOption,
  holydayOption,
  optionName,
  optionAMT,
  optionEA,
  optionHolydayList,
}) => {
  // console.log(id);
  
  const [localOptionName, setLocalOptionName] = useState(optionName);
  const [localOptionAMT, setLocalOptionAMT] = useState(makeMoneyType(optionAMT));
  const [localOptionEA, setLocalOptionEA] = useState(optionEA);
  const [localOptionHolydayList, setLocalOptionHolydayList] = useState(optionHolydayList);
  // console.log(localOptionHolydayList);
  
  const onSetHolydayOption = (idx) => {
    const newLocalOptionHolydayList = modifyArray(localOptionHolydayList, idx, !localOptionHolydayList[idx], false);
    setLocalOptionHolydayList(newLocalOptionHolydayList);
  }
  const DAYS = ["월","화","수","목","금","토","일"];
  const KEYS = ["MON","TUE","WED","THU","FRI","SAT","SUN"];
  const holydayList = [];

  const onRemoveClick = (id) => {
    onRemove(id);
  }
    
  if(holydayOption) {
    for(let i=0; i<localOptionHolydayList.length; i++) {
      holydayList.push(
        <FormGroup check inline key={KEYS[i]}>
          <Label check>
            <Input
            type="checkbox"
            checked={localOptionHolydayList[i]}
            onChange={()=>{
              // setMon(!mon);
              onSetHolydayOption(i);
            }}
            />{DAYS[i]}
          </Label>
        </FormGroup>
      );
    }
  }

  return (
    <>
      <Row className="my-2">
        <Col xs="1" className="text-center btn-wrapper">
          <Button
            className="btn-icon-only rounded-circle pt-1 pl-1"
            color="neutral"
            onClick={()=>{
              onRemoveClick(id);
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
            id={id+"optionName"}
            name={id+"optionName"}
            value={localOptionName || ''}
            maxLength={30}
            placeholder="옵션 이름"
            onChange={(e) =>{
              setLocalOptionName(e.target.value);
            }}/>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col xs="6" >
          <InputGroup className="my-1 py-0">
            <InputGroupAddon addonType="prepend">¥</InputGroupAddon>
            <Input 
            className="text-right"
            type="text"
            id={id+"optionPrice"}
            name={id+"optionPrice"}
            value={localOptionAMT || ''}
            maxLength={12}
            placeholder="가격" 
            onChange={(e) =>{
              const newValue = makeMoneyType(e.target.value);
              setLocalOptionAMT(newValue);
            }}
            />
          </InputGroup>
        </Col>
        <Col xs="6" >
          <InputGroup className="my-1 py-0">
            <InputGroupAddon addonType="prepend">EA</InputGroupAddon>
            <Input  
            disabled={!limitedOption}
            className="text-right"
            type="text"
            id={id+"optionEA"}
            name={id+"optionEA"}
            value={localOptionEA || ''}
            maxLength={3}
            placeholder="가격" 
            onChange={(e) =>{
              const newValue = removeNotNumber(e.target.value);
              setLocalOptionEA(newValue);
            }} 
            />
          </InputGroup>
        </Col>
      </Row>
      {holydayOption &&
      <Row className="mt-1">
        <Col>
          <Row>
            <Col>
              휴무일 : 
            </Col>
          </Row>
          <Row className="mb-4">
            <Col className="text-right">
              {holydayList}
            </Col>
          </Row>
        </Col>
      </Row>}
    </>
  );
});

export default InputOption;
