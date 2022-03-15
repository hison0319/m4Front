/*
작성자 : 손한이
작성일 : 2021.10.31
내용 :  일반 계정의 프로필 수정모드(화면)
*/
import React, { useEffect } from 'react';
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
  // varNationCode,
  // onSetNAtionCode,
  // nationCodeListAll,
  snsList,
  setSnsList,
  setVarBirth,
  
  AlertModal1,
  AlertModal2,

  refetch,
}) => {
  // 모바일에서 react-datetime input 클릭시 키보드 안뜨게함.
  useEffect(() => {
    if(document.getElementById("birthReactDatetime")) {
      const dateTimeInput = document.getElementById("birthReactDatetime").getElementsByClassName("form-control")[0]
      dateTimeInput.readOnly = true;
      dateTimeInput.style.backgroundColor = "#fff";
    }
  })

  return (
    <>
      <Row className="px-2">
        <Col>
          <Row className="my-4">
            <Col>
                <Row>
                    <Col>
                        <small>닉네임</small>
                    </Col>
                </Row>
                <Row>
                    <Col>
                      <Input
                      type="text"
                      name="varName"
                      id="varName"
                      placeholder="이름"
                      maxLength={20}
                      value={varName||''}
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
                      value={varZipcode||''}
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
                    value={varCity||''}
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
                    value={varStreet||''}
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
                        <small>연락처</small>
                    </Col>
                </Row>
                <Row>
                    {/* <Col xs="3">
                      <DropboxSelect
                        defaultValue={varNationCode}
                        dropItem={nationCodeListAll}
                        onClickDropItem={(item)=>{onSetNAtionCode(item)}}
                      />
                    </Col> */}
                    <Col>
                      <Input
                      type="text"
                      name="varContactNumber"
                      id="varContactNumber"
                      className="width_100"
                      placeholder="연락처"
                      maxLength={20}
                      value={varContactNumber||''}
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
                      <small>생년월일</small>
                  </Col>
              </Row>
              <Row>
                  <Col>
                    <div id="birthReactDatetime">
                      <ReactDatetime
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
                    </div>
                  </Col>
              </Row>
            </Col>
          </Row>
          <Row className="my-4">
            <Col>
              <Row>
                  <Col>
                      <small>자기 소개</small>
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
                    placeholder="자기 소개"
                    rows="10"
                    value={varIntroduce||''}
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
  varContactNumber: PropTypes.string,
  varBusinessRegNumber: PropTypes.string,
  varIntroduce: PropTypes.string,
  onChangeText: PropTypes.func,

  snsList: PropTypes.array,
  setSnsList: PropTypes.func,
  setVarBirth: PropTypes.func,
  
  // varNationCode: PropTypes.string,
  // onSetNAtionCode: PropTypes.func,
  // nationCodeListAll: PropTypes.array,
  
  AlertModal1: PropTypes.object.isRequired,
  AlertModal2: PropTypes.object.isRequired,

  refetch: PropTypes.func.isRequired,
};

export default ModifyProfile;
