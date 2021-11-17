import React, { useState, useEffect, useRef } from 'react';

import Option from './Option';

import {
  Row,
  Col,
  Button,
} from "reactstrap";

const InputOption = React.memo(() => {
  useEffect(() => {
    // console.log('InputOption is rendering!')
  });

  const TYPEID = "OT";
  const typeIdNum = useRef(0);
  const [optionList, setOptionList] = useState([{key:TYPEID+typeIdNum.current, id:TYPEID+typeIdNum.current}]);

  const removeOption = (id) => {
    setOptionList(optionList.filter(option => option.id !== id));
  }

  const addOption = () => {
    typeIdNum.current += 1;
    let id = TYPEID + typeIdNum.current;
    
    setOptionList(optionList.concat({key:id, id:id}));
  }

  return (
    <>
      <Row className="mt-1">
        <Col >
          {optionList.map((item) => 
            <Option
            key={item.id}
            id={item.id}
            onRemove={removeOption}/>
          )}
          <Row>
            <Col>
              <div className="text-center btn-wrapper my-3">
                <Button
                className="width_100"
                color="secondary"
                outline
                size="sm"
                type="button"
                onClick={()=>{
                  addOption();
                }}>
                <span className="btn-inner--text">
                  옵션이 더 있어오. (추가하기)
                </span>
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
});

export default InputOption;
