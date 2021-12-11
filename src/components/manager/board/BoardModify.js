/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager의 수정(뷰)
*/
import React, { useEffect } from 'react';
import EditDay from "./editDay/EditDay";
import EditOption from "./editOption/EditOption";
// import EditSummer from './editSummer/EditSummer';
import ImgBoxUpload from 'components/common/imagebox/ImgBoxUpload';
import {
  Button,
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  CustomInput,
} from "reactstrap";
import {
  SubmitIcon
} from "components/common/icons"
import PropTypes from "prop-types";

const BoardModify = ({
  varTimeUnit,
  setTimeUnit,
  openingHourCodeList,

  varContext,
  onChangeText,
  handleFileOnChange,
  imageItemList,

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
  useEffect(() => {
    // console.log('!!!Editor is rendering!')
  })

  return (
    <>
      <Row className="mb-2">
        <Col className="my-2 py-2">
          <Row>
            <Col xs="12">
              <InputGroup>
                <InputGroupAddon addonType="prepend">이용시간단위</InputGroupAddon>
                <Input
                type="select"
                name="varTimeUnit"
                value={varTimeUnit}
                onChange={setTimeUnit}>
                    {openingHourCodeList.map((item) => 
                        <option key={item.code} value={item.code}>{item.text}</option>
                    )}
                </Input>
              </InputGroup>
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
          <hr></hr>
          {/* <EditSummer/> */}
          <Row className="px-2">
            <Col className="my-3 pb-2">
              <ImgBoxUpload
              items={imageItemList}
              imageIdx={0}
              setImageIdx={()=>{}}
              />
            </Col>
          </Row>
          <Row className="my-2">
            <Col xs="12" >
              <div>
                가게 사진을 올려주세요.(최대15개)
              </div>
            </Col>
          </Row>
          <Row className="my-2">
            <Col xs="12" >
              <InputGroup>
                <CustomInput
                type="file"
                id="image"
                name="image"
                multiple
                label="jpg, jpeg, png, ..."
                accept='image/jpg,impge/png,image/jpeg,image/gif' 
                onChange={handleFileOnChange}/>
              </InputGroup>
            </Col>
          </Row>
          <Row className="my-2">
            <Col xs="12" >
              <InputGroup>
                <Input
                type="textarea"
                name="varContext"
                id="varContext"
                placeholder="가게 소개글을 작성해주세요."
                value={varContext}
                maxLength={5000}
                rows="13" 
                onChange={onChangeText}/>
              </InputGroup>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="text-center btn-wrapper mb-5">
          <Button
          style={{width:"90%"}}
          color="success"
          outline
          type="button"
          onClick={()=>{
            // setMode("R");
          }}>
          <span className="btn-inner--text">
            <SubmitIcon/>&nbsp;&nbsp;제출하기
          </span>
          </Button>
      </div>
    </>
  );
};

BoardModify.propTypes = {
  varTimeUnit: PropTypes.number,
  setTimeUnit: PropTypes.func,
  openingHourCodeList: PropTypes.array,

  varContext: PropTypes.string,
  onChangeText: PropTypes.func,
  handleFileOnChange: PropTypes.func,
  imageItemList: PropTypes.array,

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

export default BoardModify
