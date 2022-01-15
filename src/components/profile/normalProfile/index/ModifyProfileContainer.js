/*
작성자 : 손한이
작성일 : 2021.10.31
내용 :  일반 계정의 프로필 수정모드(기능)
       API - UserController - post
*/
import React, { useState, useRef, useEffect, useContext } from 'react';
import ModifyProfile from './ModifyProfile.js';
import AlertModal from 'components/common/alert/AlertModal';
import ProfileImageInput from 'components/profile/ProfileImageInput';
import {
  useTextInput,
} from 'hooks';
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"
import {
  getNationCodeListAll,
} from 'utils/common'
import PropTypes from "prop-types";

async function putUser(user, userId, imgFile) {
  // console.log('### putUser userId : ',userId);
  // console.log('### putUser user : ',user);
  // console.log('### putShop imgFile : ',imgFile);
  const response = await axios.put(
    '/api/v1/user/'+userId
    ,user
  );
  return response.data;
}

const ModifyProfileContainer = ({
  userId,
  name,
  zipcode,
  city,
  street,
  contactNumber,
  snsList,
  birth,
  introduce,
}) => {
  // user image
  const [imgFile, setImgFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");

  // user date text input 생성
  const [{ 
    varName,
    varZipcode,
    varCity,
    varStreet,
    varContactNumber,
    varIntroduce,
   }, onChangeText] = useTextInput({
    varName: name,
    varZipcode: zipcode,
    varCity: city,
    varStreet: street,
    varContactNumber: contactNumber,
    varIntroduce: introduce,
  });

  // user birt
  const [varBirth, setVarBirth] = useState(birth);

  // 국가코드
  const [varNationCode, setVarNationCode] = useState("82");
  const nationCodeListAll = getNationCodeListAll();

  const onSetNAtionCode = (code) => {
    setVarNationCode(code);
  }

  // snsList
  const [varSnsList, setVarSnsList] = useState(snsList);

  const alertRef1 = useRef();
  const alertRef2 = useRef();

  const AlertModal1 = 
    <AlertModal
      ref={alertRef1}
      comment="저장 했습니다."
      closingModal={()=>{
        window.location.href = '/?token=';
      }}
    />;
  const AlertModal2 = 
    <AlertModal
      ref={alertRef2}
      comment="죄송합니다. 오류로 인해 저장 실패했습니다. 개발자에게 문의해주세요."
      closingModal={()=>{
        //nothing
      }}
    />;

  // user 수정
  const {spinner} = useContext(ProgressContext);
  const [state, refetch] = useAsync(() => putUser({
    name: varName,
    zipcode: varZipcode,
    city: varCity,
    street: varStreet,
    contactNumber: varContactNumber,
    snsList: varSnsList,
    birth: varBirth,
    introduce: varIntroduce},userId,imgFile), [], true);
  const onRefetch = () => {
    refetch();
  }
  useEffect(()=>{
    const { loading, data: user, error } = state;
    if(user) {
      alertRef1.current.showAlert();
    } else if(error) {
      alertRef2.current.showAlert();
    }
    if(loading) {
      spinner.start();
    } else {
      spinner.stop();
    }
  });

  return (
    <>
      <ProfileImageInput
      setImgFile={setImgFile}
      previewURL={previewURL}
      setPreviewURL={setPreviewURL}
      />
      <ModifyProfile
      varName={varName}
      varZipcode={varZipcode}
      varCity={varCity}
      varStreet={varStreet}
      varContactNumber={varContactNumber}
      varBirth={varBirth}
      varIntroduce={varIntroduce}
      onChangeText={onChangeText}
      varNationCode={varNationCode}
      onSetNAtionCode={onSetNAtionCode}
      nationCodeListAll={nationCodeListAll}
      snsList={varSnsList}
      setSnsList={setVarSnsList}
      setVarBirth={setVarBirth}
      alertRef1={alertRef1} // 저장 했습니다.
      alertRef2={alertRef2} // 죄송합니다. 오류로 인해 저장 실패했습니다. 개발자에게 문의해주세요.

      AlertModal1={AlertModal1}
      AlertModal2={AlertModal2}

      refetch={onRefetch}
      />
    </>
  );
}

ModifyProfileContainer.propTypes = {
  userId: PropTypes.string,
  name: PropTypes.string,
  zipcode: PropTypes.string,
  city: PropTypes.string,
  street: PropTypes.string,
  contactNumber: PropTypes.string,
  snsList: PropTypes.array,
  birth: PropTypes.string,
  introduce: PropTypes.string,
};

export default ModifyProfileContainer;
