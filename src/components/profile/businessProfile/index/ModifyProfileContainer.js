/*
작성자 : 손한이
작성일 : 2021.10.25
내용 :  비지니스 계정의 프로필 수정모드(기능)
       API - ShopController - post
*/
import React, { useState, useRef, useEffect, useContext } from 'react';
import ModifyProfile from './ModifyProfile';
import AlertModal from 'components/common/alert/AlertModal';
import ProfileImageInput from 'components/profile/ProfileImageInput';
import { useTextInput } from 'hooks';
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"
import {
  getNationCodeListAll,
} from "utils/common"
import PropTypes from "prop-types";

async function putShop(shop, shopId, imgFile) {
  const response = await axios.put(
    `${process.env.REACT_APP_API_URL}api/v1/shop/${shopId}`
    ,shop
  );
  return response.data;
}

const ModifyProfileContainer = ({
  shopId,
  name,
  zipcode,
  city,
  street,
  contactNumber1,
  contactNumber2,
  snsList,
  businessRegNumber,
  introduce,
  handleSetMode,
  imageURL,
}) => {
  // user image
  const [imgFile, setImgFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(imageURL?imageURL:"");
  
  // user date text input 생성
  const [{ 
    varName,
    varZipcode,
    varCity,
    varStreet,
    varContactNumber1,
    varContactNumber2,
    varIntroduce,
    varBusinessRegNumber,
   }, onChangeText] = useTextInput({
     varName: name,
     varZipcode: zipcode,
     varCity: city,
     varStreet: street,
     varContactNumber1: contactNumber1,
     varContactNumber2: contactNumber2,
     varBusinessRegNumber: businessRegNumber,
     varIntroduce: introduce,
  });

  // 국가코드
  const [varNationCode1, setVarNationCode1] = useState("82");
  const [varNationCode2, setVarNationCode2] = useState("69");
  const nationCodeListAll = getNationCodeListAll();

  const onSetNAtionCode = (idx, code) => {
    if(idx === 1) {
      setVarNationCode1(code);
    } else {
      setVarNationCode2(code);
    }
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
        handleSetMode("R");
      }}
    />;
  const AlertModal2 = 
    <AlertModal
      ref={alertRef2}
      comment="죄송합니다. 오류로 인해 저장 실패했습니다. 개발자에게 문의해주세요."
      closingModal={()=>{
        handleSetMode("R");
      }}
    />;

  // shop 수정
  const {spinner} = useContext(ProgressContext);
  const [state, refetch] = useAsync(() => putShop({
    name: varName,
    businessRegNumber: varBusinessRegNumber,
    contactNumber: varContactNumber1,
    // contactNumber2: varContactNumber2,
    city: varCity,
    street: varStreet,
    zipcode: varZipcode},shopId,imgFile), [], true);
  const onRefetch = () => {
    refetch();
  }
  useEffect(()=>{
    const { loading, data: shop, error } = state;
    if(shop) {
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
      varContactNumber1={varContactNumber1}
      varContactNumber2={varContactNumber2}
      varBusinessRegNumber={varBusinessRegNumber}
      varIntroduce={varIntroduce}
      onChangeText={onChangeText}
      varNationCode1={varNationCode1}
      varNationCode2={varNationCode2}
      onSetNAtionCode={onSetNAtionCode}
      nationCodeListAll={nationCodeListAll}
      snsList={varSnsList}
      setSnsList={setVarSnsList}

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
  shopId: PropTypes.string,
  businessRegNumber: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
  street: PropTypes.string,
  contactNumber1: PropTypes.string,
  contactNumber2: PropTypes.string,
  snsList: PropTypes.array,
  zipcode: PropTypes.string,
  introduce: PropTypes.string,
  handleSetMode: PropTypes.func.isRequired,
};

export default ModifyProfileContainer;
