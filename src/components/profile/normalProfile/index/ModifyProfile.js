/*
작성자 : 손한이
작성일 : 2021.10.31
내용 :  일반 계정의 프로필 수정모드(화면)
*/
import React, { useEffect } from 'react';
import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  // CustomInput,
  Button,
} from "reactstrap";
import InputSNSList from 'components/profile/InputSNSList';
import {
  SubmitIcon
} from "components/common/icons/index"
import {
  removeSpc,
  removeNotNumber,
  removeNotPhone,
} from "utils/common";
import PropTypes from "prop-types";
import ReactDatetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const ModifyProfile = ({
  varName,
  varZipcode,
  varCity,
  varStreet,
  varContactNumber,
  varBirth,
  varIntroduce,
  onChangeText,
  varNationCode,
  onChangeNumber,
  nationCodeListAll,
  snsList,
  setSnsList,
  setVarBirth,

  // varNamePublic,
  // varZipcodePublic,
  // varCityPublic,
  // varStreetPublic,
  // varContactNumberPublic,
  // varSnsPublic,
  // varBirthPublic,
  // varIntroducePublic,
  // onCheck,

  // alertRef1,
  // alertRef2,
  // AlertModal1,
  // AlertModal2,
  
  AlertModal3,
  AlertModal4,

  refetch,
}) => {
  // 모바일에서 react-datetime input 클릭시 키보드 안뜨게함.
  useEffect(() => {
    const dateTimeInput = document.getElementById("birthReactDatetime").getElementsByClassName("form-control")[0]
    dateTimeInput.readOnly = true;
    dateTimeInput.style.backgroundColor = "#fff";
  })

  return (
    <>
      <Row className="px-2">
        <Col>
          <Row className="my-3">
            <Col xs="12" >
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    {/* <CustomInput
                    type="switch"
                    name="varNamePublic"
                    id="varNamePublic"
                    checked={varNamePublic}
                    onChange={(e)=>{
                      e.preventDefault();
                      alertRef1.current.showAlert();
                    }}/> */}
                    닉네임
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                type="text"
                name="varName"
                id="varName"
                placeholder="이름"
                maxLength={20}
                value={varName||''}
                onChange={(e)=>{
                  //특수기호 제거
                  // alert("test");
                  e.target.value = removeSpc(e.target.value);
                  onChangeText(e);
                }}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="my-3">
            <Col xs="12" >
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    {/* <CustomInput
                    type="switch"
                    name="varZipcodePublic"
                    id="varZipcodePublic"
                    checked={varZipcodePublic}
                    onChange={onCheck}/> */}
                    우편번호
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                type="text"
                name="varZipcode"
                id="varZipcode"
                placeholder="우편번호"
                maxLength={10}
                value={varZipcode||''}
                onChange={(e)=>{
                  //숫자만 입력해 주세요.
                  e.target.value = removeNotNumber(e.target.value);
                  onChangeText(e);
                }}/>
              </InputGroup>
            </Col>
          </Row>
          <Row className="my-3">
            <Col xs="12" >
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    {/* <CustomInput
                    type="switch"
                    name="varCityPublic"
                    id="varCityPublic"
                    checked={varCityPublic}
                    onChange={onCheck}/> */}
                    주소 1
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                type="text"
                name="varCity"
                id="varCity"
                placeholder="주소"
                maxLength={100}
                value={varCity||''}
                onChange={onChangeText}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="my-3">
            <Col xs="12" >
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    {/* <CustomInput
                    type="switch"
                    name="varStreetPublic"
                    id="varStreetPublic"
                    checked={varStreetPublic}
                    onChange={onCheck}/> */}
                    주소 2
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                type="text"
                name="varStreet"
                id="varStreet"
                placeholder="상세주소"
                maxLength={200}
                value={varStreet||''}
                onChange={onChangeText}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs="12" >
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    {/* <CustomInput
                    type="switch"
                    name="varContactNumberPublic"
                    id="varContactNumberPublic"
                    checked={varContactNumberPublic}
                    onChange={onCheck}/> */}
                    연락처
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="select"
                  name="varNationCode"
                  id="varNationCode"
                  value={varNationCode||82}
                  onChange={onChangeNumber}>
                  {nationCodeListAll.map((item) => 
                      <option key={item.code} value={item.code}>{item.nation}</option>
                  )}
                </Input>
                <Input
                type="text"
                name="varContactNumber"
                id="varContactNumber"
                className="width_40"
                placeholder="연락처"
                maxLength={20}
                value={varContactNumber||''}
                onChange={(e)=>{
                  //번호 양식만
                  e.target.value = removeNotPhone(e.target.value);
                  onChangeText(e);
                }}/>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12" >
              <InputSNSList
              snsList={snsList}
              setSnsList={setSnsList}
              />
            </Col>
          </Row>
          <Row className="mb-2">
            <Col xs="12" >
            <InputGroup
            id="birthReactDatetime">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    {/* <CustomInput
                    type="switch"
                    name="varBirthPublic"
                    id="varBirthPublic"
                    checked={varBirthPublic}
                    onChange={onCheck}/>
                    &nbsp;&nbsp;&nbsp;&nbsp; */}
                    생년월일
                  </InputGroupText>
                </InputGroupAddon>
                  <ReactDatetime
                    className="width_70"
                    value={varBirth}
                    dateFormat="YYYY-MM-DD"
                    timeFormat={false}
                    closeOnSelect={true}
                    onChange={(e)=>{
                      if(typeof(e) === 'object' && Object.keys(e)[0] === '_isAMomentObject') {
                        setVarBirth(e);
                      }
                    }}
                  />
              </InputGroup>
            </Col>
          </Row>
          <Row className="my-3">
            <Col xs="12" >
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    {/* <CustomInput
                    type="switch"
                    name="varIntroducePublic"
                    id="varIntroducePublic"
                    checked={varIntroducePublic}
                    onChange={()=>{
                      // alertRef2.current.showAlert();
                    }}/> */}
                    가게 소개
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                type="textarea"
                name="varIntroduce"
                id="varIntroduce"
                maxLength={500}
                placeholder="가게소개 (500자 이내)"
                rows="10"
                value={varIntroduce||''}
                onChange={onChangeText}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <div className="text-center btn-wrapper my-3">
                  <Button
                  className="width_90"
                  color="success"
                  outline
                  type="button"
                  onClick={refetch}
                  >
                  <span className="btn-inner--text">
                    <SubmitIcon/>&nbsp;&nbsp;제출하기
                  </span>
                  </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* {AlertModal1} */}
      {/* {AlertModal2} */}
      {AlertModal3}
      {AlertModal4}
    </>
  );
}

ModifyProfile.propTypes = {
  varName: PropTypes.string,
  varZipcode: PropTypes.string,
  varCity: PropTypes.string,
  varStreet: PropTypes.string,
  varContactNumber: PropTypes.string,
  varBusinessRegNumber: PropTypes.string,
  varIntroduce: PropTypes.string,
  onChangeText: PropTypes.func,

  snsList: PropTypes.array,
  setSnsList: PropTypes.func,
  setVarBirth: PropTypes.func,
  
  varNationCode: PropTypes.number,
  onChangeNumber: PropTypes.func,
  nationCodeListAll: PropTypes.array.isRequired,
  
  // varNamePublic: PropTypes.bool,
  // varZipcodePublic: PropTypes.bool,
  // varCityPublic: PropTypes.bool,
  // varStreetPublic: PropTypes.bool,
  // varContactNumberPublic: PropTypes.bool,
  // varSnsPublic: PropTypes.bool,
  // varBirthPublic: PropTypes.bool,
  // varIntroducePublic: PropTypes.bool,
  // onCheck: PropTypes.func,

  // alertRef1: PropTypes.object.isRequired,
  // alertRef2: PropTypes.object.isRequired,
  // AlertModal1: PropTypes.object.isRequired,
  // AlertModal2: PropTypes.object.isRequired,
  AlertModal3: PropTypes.object.isRequired,
  AlertModal4: PropTypes.object.isRequired,

  refetch: PropTypes.func.isRequired,
};

export default ModifyProfile;
