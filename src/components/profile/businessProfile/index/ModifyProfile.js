/*
작성자 : 손한이
작성일 : 2021.10.25
내용 :  비지니스 계정의 프로필 수정모드(화면)
*/
import React, { useState } from 'react';
import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  // CustomInput,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import InputSNSList from 'components/profile/InputSNSList';
import {
  SubmitIcon
} from "components/common/icons/Index";
import {
  removeSpc,
  removeNotNumber,
  removeNotPhone,
} from "utils/common";
import PropTypes from "prop-types";

const ModifyProfile = ({
  varName,
  varZipcode,
  varCity,
  varStreet,
  varContactNumber1,
  varContactNumber2,
  varBusinessRegNumber,
  varIntroduce,
  onChangeText,
  varNationCode1,
  varNationCode2,
  onChangeNumber,
  nationCodeListAll,
  snsList,
  setSnsList,

  // varNamePublic,
  // varZipcodePublic,
  // varCityPublic,
  // varStreetPublic,
  // varContactNumberPublic1,
  // varContactNumberPublic2,
  // varBusinessRegNumberPublic,
  // varIntroducePublic,
  // onCheck,

  // alertRef1,
  // alertRef2,
  // alertRef3,

  // AlertModal1,
  // AlertModal2,
  // AlertModal3,
  AlertModal4,
  AlertModal5,

  refetch,
}) => {

  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Row className="px-2">
        <Col>
          <Row className="my-3">
            <Col xs="12" >
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText
                  className="input_test">
                    {/* <CustomInput
                    type="switch"
                    name="varNamePublic"
                    id="varNamePublic"
                    checked={varNamePublic}
                    onChange={(e)=>{
                      e.preventDefault();
                      alertRef1.current.showAlert();
                    }}/> */}
                    가게 이름
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                type="text"
                name="varName"
                id="varName"
                className="input_test"
                placeholder="가게 이름"
                maxLength={30}
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
          <Row className="my-3">
            <Col xs="12" >
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    {/* <CustomInput
                    type="switch"
                    name="varContactNumberPublic1"
                    id="varContactNumberPublic1"
                    checked={varContactNumberPublic1}
                    onChange={onCheck}/> */}
                    연락처 1
                  </InputGroupText>
                </InputGroupAddon>
                {/* <Input
                  type="select"
                  name="varNationCode1"
                  id="varNationCode1"
                  value={varNationCode1||82}
                  onChange={onChangeNumber}>
                  {nationCodeListAll.map((item) => 
                      <option key={item.nation+item.code} value={item.code}>{item.nation}</option>
                  )}
                </Input> */}
                <Dropdown
                isOpen={toggle}
                toggle={()=>{setToggle(!toggle)}}>
                  <DropdownToggle
                  caret
                  color="natural"
                  >
                    kor
                  </DropdownToggle>
                  <DropdownMenu container="body">
                    <DropdownItem
                    onClick={function noRefCheck(){}}
                    className="small">
                      Action 1
                    </DropdownItem>
                    <DropdownItem onClick={function noRefCheck(){}}>
                      Action 2
                    </DropdownItem>
                    <DropdownItem onClick={function noRefCheck(){}}>
                      Action 3
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Input
                type="text"
                name="varContactNumber1"
                id="varContactNumber1"
                className="width_40"
                placeholder="연락처1"
                maxLength={20}
                value={varContactNumber1||''}
                onChange={(e)=>{
                  //번호 양식만
                  e.target.value = removeNotPhone(e.target.value);
                  onChangeText(e);
                }}/>
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
                    name="varContactNumberPublic2"
                    id="varContactNumberPublic2"
                    checked={varContactNumberPublic2}
                    onChange={onCheck}/> */}
                    연락처 2
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="select"
                  name="varNationCode2"
                  id="varNationCode2"
                  value={varNationCode2||82}
                  onChange={onChangeNumber}>
                  {nationCodeListAll.map((item) => 
                      <option key={item.nation+item.code} value={item.code}>{item.nation}</option>
                  )}
                </Input>
                <Input
                type="text"
                name="varContactNumber2"
                id="varContactNumber2"
                className="width_40"
                placeholder="연락처2"
                maxLength={20}
                value={varContactNumber2||''}
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
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    {/* <CustomInput
                    type="switch"
                    name="varBusinessRegNumberPublic"
                    id="varBusinessRegNumberPublic"
                    checked={varBusinessRegNumberPublic}
                    onChange={(e)=>{
                      e.preventDefault();
                      alertRef3.current.showAlert();
                    }}/> */}
                    사업자 번호
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                type="text"
                name="varBusinessRegNumber"
                id="varBusinessRegNumber"
                placeholder="사업자 번호"
                maxLength={20}
                value={varBusinessRegNumber||''}
                onChange={(e)=>{
                  //숫자만 입력해 주세요.
                  e.target.value = removeNotPhone(e.target.value);
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
                    name="varIntroducePublic"
                    id="varIntroducePublic"
                    checked={varIntroducePublic}
                    onChange={(e)=>{
                      e.preventDefault();
                      alertRef2.current.showAlert();
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
      {/* {AlertModal3} */}
      {AlertModal4}
      {AlertModal5}
    </>
  );
}

ModifyProfile.propTypes = {
  varName: PropTypes.string,
  varZipcode: PropTypes.string,
  varCity: PropTypes.string,
  varStreet: PropTypes.string,
  varContactNumber1: PropTypes.string,
  varContactNumber2: PropTypes.string,
  varBusinessRegNumber: PropTypes.string,
  varIntroduce: PropTypes.string,
  onChangeText: PropTypes.func,
  varNationCode1: PropTypes.number,
  varNationCode2: PropTypes.number,
  onChangeNumber: PropTypes.func,
  nationCodeListAll: PropTypes.array,

  snsList: PropTypes.array,
  setSnsList: PropTypes.func,

  // varImagePublic: PropTypes.bool,
  // varNamePublic: PropTypes.bool,
  // varZipcodePublic: PropTypes.bool,
  // varCityPublic: PropTypes.bool,
  // varStreetPublic: PropTypes.bool,
  // varContactNumberPublic1: PropTypes.bool,
  // varContactNumberPublic2: PropTypes.bool,
  // varBusinessRegNumberPublic: PropTypes.bool,
  // varIntroducePublic: PropTypes.bool,
  // onCheck: PropTypes.func,

  // alertRef1: PropTypes.object.isRequired,
  // alertRef2: PropTypes.object.isRequired,
  // alertRef3: PropTypes.object.isRequired,

  // AlertModal1: PropTypes.object.isRequired,
  // AlertModal2: PropTypes.object.isRequired,
  // AlertModal3: PropTypes.object.isRequired,
  AlertModal4: PropTypes.object.isRequired,
  AlertModal5: PropTypes.object.isRequired,

  refetch: PropTypes.func.isRequired,
};

export default ModifyProfile;
