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
  useNumberInput,
  // useCheckInput
} from 'hooks';
// import useChecked from 'hooks/useTextInput';
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"
import { getNationCodeListAll } from 'utils/common'
import PropTypes from "prop-types";

async function putUser(user, id, imgFile) {
  // console.log('### putUser id : ',id);
  // console.log('### putUser user : ',user);
  // console.log('### putShop imgFile : ',imgFile);
  const response = await axios.put(
    '/api/v1/user/'+id
    ,user
  );
  return response.data;
}

const ModifyProfileContainer = ({
  id,
  name,
  zipcode,
  city,
  street,
  nationCode,
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
    varBirth,
    varIntroduce,
   }, onChangeText] = useTextInput({
    varName: name,
    varZipcode: zipcode,
    varCity: city,
    varStreet: street,
    varContactNumber: contactNumber,
    varBirth: birth,
    varIntroduce: introduce,
  });

  // 국가코드는 number type으로 별도 관리
  const [{ varNationCode }, onChangeNumber] = useNumberInput({
    varNationCode: nationCode,
  });
  const nationCodeListAll = getNationCodeListAll();

  // snsList
  const [varSnsList, setVarSnsList] = useState(snsList);
  console.log('### varSnsList',varSnsList);

// user 공개여부 정보 => 2021. 11. 14 공개정보는 사용 안하기로 합의
//  const [{ 
//     varImagePublic,
//     varNamePublic,
//     varZipcodePublic,
//     varCityPublic,
//     varStreetPublic,
//     varContactNumberPublic,
//     varSnsPublic,
//     varBirthPublic,
//     varIntroducePublic,
//   }, onCheck] = useCheckInput({
//     varImagePublic: true,
//     varNamePublic: true,
//     varZipcodePublic: true,
//     varCityPublic: true,
//     varStreetPublic: true,
//     varContactNumberPublic: true,
//     varSnsPublic: true,
//     varBirthPublic: true,
//     varIntroducePublic: true,
//   });

  // const alertRef1 = useRef();
  // const alertRef2 = useRef();
  const alertRef3 = useRef();
  const alertRef4 = useRef();

  // const AlertModal1 = 
  //   <AlertModal
  //     ref={alertRef1}
  //     comment="이름은 항상 공개합니다."
  //     closingModal={()=>{
  //       //nothing
  //     }}
  //   />;
  // const AlertModal2 = 
  //   <AlertModal
  //     ref={alertRef2}
  //     comment="소개는 항상 공개합니다."
  //     closingModal={()=>{
  //       //nothing
  //     }}
  //   />;
  const AlertModal3 = 
    <AlertModal
      ref={alertRef3}
      comment="저장 했습니다."
      closingModal={()=>{
        window.location.href = '/?token=';
      }}
    />;
  const AlertModal4 = 
    <AlertModal
      ref={alertRef4}
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
    // nationCode: varNationCode,
    contactNumber: varContactNumber,
    snsList: varSnsList,
    birth: varBirth,
    introduce: varIntroduce},id,imgFile), [], true);
  const onRefetch = () => {
    refetch();
  }
  useEffect(()=>{
    const { loading, data: user, error } = state;
    if(user) {
      alertRef3.current.showAlert();
    } else if(error) {
      alertRef4.current.showAlert();
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
      // varImagePublic={varImagePublic}
      // onCheck={onCheck}
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
      onChangeNumber={onChangeNumber}
      nationCodeListAll={nationCodeListAll}
      snsList={varSnsList}
      setSnsList={setVarSnsList}

      // varNamePublic={varNamePublic}
      // varZipcodePublic={varZipcodePublic}
      // varCityPublic={varCityPublic}
      // varStreetPublic={varStreetPublic}
      // varContactNumberPublic={varContactNumberPublic}
      // varSnsPublic={varSnsPublic}
      // varBirthPublic={varBirthPublic}
      // varIntroducePublic={varIntroducePublic}
      // onCheck={onCheck}

      // alertRef1={alertRef1} // 이름은 항상 공개합니다.
      // alertRef2={alertRef2} // 소개는 항상 공개합니다.
      alertRef3={alertRef3} // 저장 했습니다.
      alertRef4={alertRef4} // 죄송합니다. 오류로 인해 저장 실패했습니다. 개발자에게 문의해주세요.

      // AlertModal1={AlertModal1}
      // AlertModal2={AlertModal2}
      AlertModal3={AlertModal3}
      AlertModal4={AlertModal4}

      refetch={onRefetch}
      />
    </>
  );
}

ModifyProfileContainer.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  zipcode: PropTypes.string,
  city: PropTypes.string,
  street: PropTypes.string,
  nationCode: PropTypes.number,
  contactNumber: PropTypes.string,
  snsList: PropTypes.array,
  birth: PropTypes.string,
  introduce: PropTypes.string,
};

export default ModifyProfileContainer;
