import React, { useState, useEffect, useRef }  from 'react';
import InputOption from './InputOption';
import AlertModal from 'components/common/alert/AlertModal';

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

const Option = React.memo((props) => {
  useEffect(() => {
    // console.log('Option is rendering!')
  });

  const alertRef = useRef();
  const TYPEID = props.id;
  // console.log(TYPEID);
  const onRemove = props.onRemove;

  const onRemoveClick = (id) => {
    onRemove(id);
  }

  const [optionType, setOptionType] = useState("");
  const [monoOption, setMonoOption] = useState(true);
  const [limitedOption, setLimitedOption] = useState(false);
  const [holydayOption, setholydayOption] = useState(true);

  const [optionNameList, setOptionNameList] = useState(["손한이","이관호"]);
  const [optionAMTList, setOptionAMTList] = useState([3000000,5000]);
  const [optionEAList, setOptionEAList] = useState([]);
  const [optionHolydayList, setOptionHolydayList] = useState(
    [
    [true,true,true,false,true,true,true],
    [false,true,false,false,false,false,false]
    ]
  );

  const NAMEID = TYPEID+"ON";
  const nameIdNum = useRef(0);
  
  const exOption = [1,2];
  const [inputList, setInputList] = useState(()=>{
      let newInputList = [];
      for(let i=0; i<exOption.length; i++) {
        newInputList = newInputList.concat([
          {
            id:NAMEID+nameIdNum.current,
            limitedOption:limitedOption,
            holydayOption:holydayOption,
            optionName:optionNameList[i],
            optionAMT:optionAMTList[i],
            optionEA:optionEAList[i],
            optionHolydayList:optionHolydayList[i],
          }
        ])
        nameIdNum.current += 1;
      }
      return newInputList;
    }
  );

  const removeInput = (id) => {
    if(inputList.length === 1) {
      alertRef.current.showAlert();
      return false;
    }
    setInputList(inputList.filter(input => input.id !== id));
  }

  const addInput = () => {
    nameIdNum.current += 1;
    let id = NAMEID + nameIdNum.current;
    
    setInputList(inputList.concat({key:id, id:id}));
  }
  
  return (
    <>
      <Row className="my-1">
        <Col xs="1" className="text-center btn-wrapper">
          <Button
            className="btn-icon-only rounded-circle pt-1 pl-1"
            color="neutral"
            onClick={()=>{
              onRemoveClick(TYPEID);
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
            name="optionType"
            id="optionType"
            value={optionType}
            maxLength={50}
            placeholder="옵션 종류"
            onChange={(e)=>{
              setOptionType(e.target.value);
            }}/>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
            <div className="text-right mt-2">
              <CustomInput
              type="switch"
              id="typeSingle"
              name="typeSingle"
              label="한번에 한 개만 선택할 수 있습니다."
              className="text-secondary" 
              checked={monoOption}
              onChange={()=>{
                setMonoOption(!monoOption);
              }}/>
            </div>
            <div className="text-right mt-2">
              <CustomInput
              type="switch"
              id="typeLimit"
              name="typeLimit"
              label="갯수 제한이 있습니다."
              className="text-secondary" 
              checked={limitedOption}
              onChange={()=>{
                setLimitedOption(!limitedOption);
              }}/>
            </div>
            <div className="text-right mt-2 mb-2">
              <CustomInput
              type="switch"
              id="typeHoly"
              name="typeHoly"
              label="휴무 요일이 있습니다."
              className="text-secondary" 
              checked={holydayOption}
              onChange={()=>{
                setholydayOption(!holydayOption);
              }}/>
            </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {inputList.map((item) => 
            <InputOption
            key={item.id}
            id={item.id}
            limitedOption={limitedOption}
            holydayOption={holydayOption}
            onRemove={removeInput}
            optionName={item.optionName}
            optionAMT={item.optionAMT}
            optionEA={item.optionEA}
            optionHolydayList={item.optionHolydayList}
            />
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
              addInput();
            }}
          >
            <span className="btn-inner--icon">
              <AddOptionIcon/>
            </span>
          </Button>
        </Col>
      </Row>
      <AlertModal
        ref={alertRef}
        comment="최소 한개의 옵션이 필요합니다."
        onSaveClick={()=>{
          //nothing
        }}
      />
    </>
  );
});

export default Option;
