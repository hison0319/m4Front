/*
작성자 : 손한이
작성일 : 2021.11.21
내용 :  option list 뷰
*/
import React from 'react';
import Option from './Option';
import {
  Row,
  Col,
  Button,
} from "reactstrap";
import PropTypes from "prop-types";

const Options = ({
  optionList,
  onSetOptionList,
  removeOption,
  addOption,
  removeInput,
  addInput,
}) => {
  return (
    <>
      <Row className="mt-1">
        <Col >
          {optionList.map((item) => 
            <Option
            key={item.optionCategoryId}
            optionCategoryId={item.optionCategoryId}
            optionCategoryName={item.optionCategoryName}
            optionsAllowMultiSelect={item.optionsAllowMultiSelect}
            optionsLimited={item.optionsLimited}
            optionsDayOfWeek={item.optionsDayOfWeek}
            options={item.options}
            onSetOptionList={onSetOptionList}
            onRemove={removeOption}
            removeInput={removeInput}
            addInput={addInput}/>
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
};

Options.propTypes = {
  optionList: PropTypes.array,
  onSetOptionList: PropTypes.func,
  removeOption: PropTypes.func,
  addOption: PropTypes.func,
  removeInput: PropTypes.func,
  addInput: PropTypes.func,
}

export default Options;
