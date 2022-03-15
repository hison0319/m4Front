/*
작성자 : 손한이
작성일 : 2021.10.25
내용 :  비지니스 계정의 프로필 수정모드(화면)
*/
import React from 'react';
import {
  Row,
  Col,
  Input,
  Button,
} from "reactstrap";
import InputSNSList from 'components/profile/InputSNSList';
import DropboxSelect from 'components/common/dropbox/DropboxSelect';
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
  // varNationCode1,
  // varNationCode2,
  // onSetNAtionCode,
  // nationCodeListAll,
  snsList,
  setSnsList,

  AlertModal1,
  AlertModal2,

  refetch,
}) => {
  return (
    <>
      <Row className="px-2">
        <Col>
          <Row className="my-2">
            <Col>
              <Row>
                  <Col>
                      <small>가게 이름</small>
                  </Col>
              </Row>
              <Row>
                  <Col>
                    <Input
                    type="text"
                    name="varName"
                    id="varName"
                    placeholder="가게 이름"
                    maxLength={30}
                    value={varName||""}
                    onChange={(e)=>{
                      //특수기호 제거
                      e.target.value = removeSpc(e.target.value);
                      onChangeText(e);
                    }}
                    />
                  </Col>
              </Row>
            </Col>
          </Row>
          <Row className="my-4">
            <Col>
              <Row>
                  <Col>
                      <small>우편번호</small>
                  </Col>
              </Row>
              <Row>
                  <Col>
                    <Input
                    type="text"
                    name="varZipcode"
                    id="varZipcode"
                    placeholder="우편번호"
                    maxLength={10}
                    value={varZipcode||""}
                    onChange={(e)=>{
                      //숫자만 입력해 주세요.
                      e.target.value = removeNotNumber(e.target.value);
                      onChangeText(e);
                    }}/>
                  </Col>
              </Row>
            </Col>
          </Row>
          <Row className="my-4">
            <Col>
              <Row>
                  <Col>
                      <small>주소 1</small>
                  </Col>
              </Row>
              <Row>
                  <Col>
                    <Input
                    type="text"
                    name="varCity"
                    id="varCity"
                    placeholder="주소"
                    maxLength={100}
                    value={varCity||""}
                    onChange={onChangeText}
                    />
                  </Col>
              </Row>
            </Col>
          </Row>
          <Row className="my-4">
            <Col>
              <Row>
                  <Col>
                      <small>주소 2</small>
                  </Col>
              </Row>
              <Row>
                  <Col>
                    <Input
                    type="text"
                    name="varStreet"
                    id="varStreet"
                    placeholder="상세주소"
                    maxLength={200}
                    value={varStreet||""}
                    onChange={onChangeText}
                    />
                  </Col>
              </Row>
            </Col>
          </Row>
          <Row className="my-4">
            <Col>
              <Row>
                  <Col>
                      <small>연락처 1</small>
                  </Col>
              </Row>
              <Row>
                  {/* <Col xs="3">
                    <DropboxSelect
                    defaultValue={varNationCode1}
                    dropItem={nationCodeListAll}
                    onClickDropItem={(item)=>{onSetNAtionCode(1,item)}}
                    />
                  </Col> */}
                  <Col>
                    <Input
                    type="text"
                    name="varContactNumber1"
                    id="varContactNumber1"
                    className="width_100"
                    placeholder="연락처1"
                    maxLength={20}
                    value={varContactNumber1||""}
                    onChange={(e)=>{
                      //번호 양식만
                      e.target.value = removeNotPhone(e.target.value);
                      onChangeText(e);
                    }}/>
                  </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Row>
                  <Col>
                      <small>연락처 2</small>
                  </Col>
              </Row>
              <Row>
                  {/* <Col xs="3">
                    <DropboxSelect
                    defaultValue={varNationCode2}
                    dropItem={nationCodeListAll}
                    onClickDropItem={(item)=>{onSetNAtionCode(2,item)}}
                    />
                  </Col> */}
                  <Col>
                    <Input
                    type="text"
                    name="varContactNumber2"
                    id="varContactNumber2"
                    className="width_100"
                    placeholder="연락처2"
                    maxLength={20}
                    value={varContactNumber2||""}
                    onChange={(e)=>{
                      //번호 양식만
                      e.target.value = removeNotPhone(e.target.value);
                      onChangeText(e);
                    }}/>
                  </Col>
              </Row>
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
            <Col>
              <Row>
                  <Col>
                      <small>사업자 번호</small>
                  </Col>
              </Row>
              <Row>
                  <Col>
                    <Input
                    type="text"
                    name="varBusinessRegNumber"
                    id="varBusinessRegNumber"
                    placeholder="사업자 번호"
                    maxLength={20}
                    value={varBusinessRegNumber||""}
                    onChange={(e)=>{
                      //숫자만 입력해 주세요.
                      e.target.value = removeNotPhone(e.target.value);
                      onChangeText(e);
                    }}
                    />
                  </Col>
              </Row>
            </Col>
          </Row>
          <Row className="my-4">
            <Col>
              <Row>
                  <Col>
                      <small>가게 소개</small>
                  </Col>
              </Row>
              <Row>
                  <Col>
                    <Input
                    type="textarea"
                    name="varIntroduce"
                    id="varIntroduce"
                    className="input_textarea_custom"
                    maxLength={500}
                    placeholder="가게소개"
                    rows="10"
                    value={varIntroduce||""}
                    onChange={onChangeText}
                    />
                  </Col>
              </Row>
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <div className="text-center btn-wrapper my-3">
                  <Button
                  className="width_100 sub_button2 color_2 border_color_2"
                  outline
                  type="button"
                  onClick={refetch}
                  >
                  <span className="btn-inner--text">
                    제출하기
                  </span>
                  </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      {AlertModal1}
      {AlertModal2}
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
  // varNationCode1: PropTypes.string,
  // varNationCode2: PropTypes.string,
  // onSetNAtionCode: PropTypes.func,
  // nationCodeListAll: PropTypes.array,

  snsList: PropTypes.array,
  setSnsList: PropTypes.func,

  AlertModal1: PropTypes.object.isRequired,
  AlertModal2: PropTypes.object.isRequired,

  refetch: PropTypes.func.isRequired,
};

export default ModifyProfile;
