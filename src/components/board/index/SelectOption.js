import React, { useState, useRef, useCallback } from 'react';
import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Input,
} from 'reactstrap';

const SelectOption = (props) => {
  const optionType= props.optionType;
  const options = props.options;
  const optionList = [];
  const optionId = useRef(0);

  optionList.push(
      <option key={optionId.current} value="">선택 안함</option>
  );
  optionId.current += 1;
  for(const option of options) {
    optionList.push(
      <option key={optionId.current} id={option.key} value={option.key}>{option.name} : ¥ {option.price}</option>
    );
    optionId.current += 1;
  }
  
  const [curOption, setCurOption] = useState('');
  const [curOptionEa, setCurOptionEa] = useState(0);
  const onSelectChange = (val) => {
    let flag = true;
    for(const option of options) {
      if(val === option.key) {
        flag = false;
        setCurOptionEa(option.ea);
      }
    }
    if(flag) setCurOptionEa(0);
    setCurOption(val);
  }

  const [value, setValue] = useState('');
  const onChange = useCallback(e => {
    setValue(e.target.value);
  },[]);

  return (
    <>
      <Row>
        <Col>
          <Row className="my-2">
            <Col>
              <span>{optionType}</span>
            </Col>
          </Row>
          <Row className="my-2">
            <Col>
              <Input
              type="select"
              name="select"
              id="exampleSelect"
              bsSize="sm"
              value={curOption}
              onChange={(e)=>{
                onSelectChange(e.target.value)
              }}>
                {optionList}
              </Input>
            </Col>
          </Row>
          <Row className="my-2">
            <Col>
              <InputGroup>
                <InputGroupAddon addonType="prepend">EA</InputGroupAddon>
                {curOptionEa===0?
                <Input
                disabled
                value=""
                bsSize="sm"
                className="text-right" 
                placeholder="개수" 
                type="number"/>:
                <Input  
                value={value}
                onChange={onChange}
                className="text-right" 
                placeholder="개수" 
                bsSize="sm"
                min={1} 
                max={curOptionEa} 
                type="number"/>
                }
              </InputGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default SelectOption;