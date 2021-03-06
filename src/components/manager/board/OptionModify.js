/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager의 수정(뷰)
*/
import React from 'react';
import EditDay from "./editDay/EditDay";
import EditOption from "./editOption/EditOption";
import {
  Row,
  Col,
  Button,
  Input,
} from "reactstrap";
import PropTypes from "prop-types";

const OptionModify = ({
  varTimeUnit,
  setTimeUnit,
  openingHourCodeList,

  week,
  monTimeList,
  setMonTimeList,
  tueTimeList,
  setTueTimeList,
  wedTimeList,
  setWedTimeList,
  thuTimeList,
  setThuTimeList,
  friTimeList,
  setFriTimeList,
  satTimeList,
  setSatTimeList,
  sunTimeList,
  setSunTimeList,

  optionList,
  onSetOptionList,
  removeOption,
  addOption,
  removeInput,
  addInput,
  optionAlert
}) => {
  return (
    <>
      <Row className="mb-2">
        <Col className="my-2 py-2">
          <Row>
            <Col>
              <Row>
                  <Col>
                      <small>이용시간단위</small>
                  </Col>
              </Row>
              <Row className="my-2">
                <Col>
                  <Input
                  type="select"
                  name="varTimeUnit"
                  value={varTimeUnit}
                  onChange={setTimeUnit}>
                      {openingHourCodeList.map((item) => 
                          <option key={item.code} value={item.code}>{item.text}</option>
                      )}
                  </Input>
                </Col>
              </Row>
            </Col>
          </Row>
          <EditDay
          week={week}
          monTimeList={monTimeList}
          setMonTimeList={setMonTimeList}
          tueTimeList={tueTimeList}
          setTueTimeList={setTueTimeList}
          wedTimeList={wedTimeList}
          setWedTimeList={setWedTimeList}
          thuTimeList={thuTimeList}
          setThuTimeList={setThuTimeList}
          friTimeList={friTimeList}
          setFriTimeList={setFriTimeList}
          satTimeList={satTimeList}
          setSatTimeList={setSatTimeList}
          sunTimeList={sunTimeList}
          setSunTimeList={setSunTimeList}
          />
          <hr></hr>
          <EditOption
          optionList={optionList}
          onSetOptionList={onSetOptionList}
          removeOption={removeOption}
          addOption={addOption}
          removeInput={removeInput}
          addInput={addInput}/>
          {optionAlert}
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="text-center btn-wrapper my-2">
            <Button
            className="width_100 sub_button2 color_4 border_color_4"
            outline
            type="button"
            onClick={()=>{}}>
            <span className="btn-inner--text">
              저장하기
            </span>
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

OptionModify.propTypes = {
  varTimeUnit: PropTypes.number,
  setTimeUnit: PropTypes.func,
  openingHourCodeList: PropTypes.array,

  week: PropTypes.array,
  monTimeList: PropTypes.array,
  setMonTimeList: PropTypes.func,
  tueTimeList: PropTypes.array,
  setTueTimeList: PropTypes.func,
  wedTimeList: PropTypes.array,
  setWedTimeList: PropTypes.func,
  thuTimeList: PropTypes.array,
  setThuTimeList: PropTypes.func,
  friTimeList: PropTypes.array,
  setFriTimeList: PropTypes.func,
  satTimeList: PropTypes.array,
  setSatTimeList: PropTypes.func,
  sunTimeList: PropTypes.array,
  setSunTimeList: PropTypes.func,

  optionList: PropTypes.array,
  onSetOptionList: PropTypes.func,
  removeOption: PropTypes.func,
  addOption: PropTypes.func,
  removeInput: PropTypes.func,
  addInput: PropTypes.func,
  optionAlert: PropTypes.object, 
};

export default OptionModify
