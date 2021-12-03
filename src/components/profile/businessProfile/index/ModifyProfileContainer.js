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
import { 
  useTextInput,
  useNumberInput,
} from 'hooks';
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"
import { getNationCodeListAll } from 'utils/common'
import PropTypes from "prop-types";

async function putShop(shop, id, imgFile) {
  // console.log('### putShop id : ',id);
  // console.log('### putShop shop : ',shop);
  // console.log('### putShop imgFile : ',imgFile);
  const response = await axios.put(
    '/api/v1/shop/'+id
    ,shop
  );
  return response.data;
}

const ModifyProfileContainer = ({
  id,
  name,
  zipcode,
  city,
  street,
  nationCode1,
  nationCode2,
  contactNumber1,
  contactNumber2,
  snsList,
  businessRegNumber,
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

  // 국가코드는 number type으로 별도 관리
  const [{ varNationCode1, varNationCode2 }, onChangeNumber] = useNumberInput({
    varNationCode1: nationCode1,
    varNationCode2: nationCode2,
  });
  const nationCodeListAll = getNationCodeListAll();

  // snsList
  const [varSnsList, setVarSnsList] = useState(snsList);

// user 공개여부 정보 => 2021. 11. 14 공개정보는 사용 안하기로 합의
  // const [{ 
  //   varImagePublic,
  //   varNamePublic,
  //   varZipcodePublic,
  //   varCityPublic,
  //   varStreetPublic,
  //   varContactNumberPublic1,
  //   varContactNumberPublic2,
  //   varBusinessRegNumberPublic,
  //   varIntroducePublic,
  // }, onCheck] = useCheckInput({
  //   varImagePublic: true,
  //   varNamePublic: true,
  //   varZipcodePublic: true,
  //   varCityPublic: true,
  //   varStreetPublic: true,
  //   varContactNumberPublic1: true,
  //   varContactNumberPublic2: true,
  //   varBusinessRegNumberPublic: true,
  //   varIntroducePublic: true,
  // });

  // const alertRef1 = useRef();
  // const alertRef2 = useRef();
  // const alertRef3 = useRef();
  const alertRef4 = useRef();
  const alertRef5 = useRef();

  // const AlertModal1 = 
  //   <AlertModal
  //     ref={alertRef1}
  //     comment="가게이름은 항상 공개합니다."
  //     closingModal={()=>{
  //       //nothing
  //     }}
  //   />;

  // const AlertModal2 = 
  //   <AlertModal
  //     ref={alertRef2}
  //     comment="가게소개는 항상 공개합니다."
  //     closingModal={()=>{
  //       //nothing
  //     }}
  //   />;
  // const AlertModal3 = 
  //   <AlertModal
  //     ref={alertRef3}
  //     comment="사업자번호는 항상 공개합니다."
  //     closingModal={()=>{
  //       //nothing
  //     }}
  //   />;
  const AlertModal4 = 
    <AlertModal
      ref={alertRef4}
      comment="저장 했습니다."
      closingModal={()=>{
        window.location.href = '/';
      }}
    />;
  const AlertModal5 = 
    <AlertModal
      ref={alertRef5}
      comment="죄송합니다. 오류로 인해 저장 실패했습니다. 개발자에게 문의해주세요."
      closingModal={()=>{
        //nothing
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
    zipcode: varZipcode},id,imgFile), [], true);
  const onRefetch = () => {
    refetch();
  }
  useEffect(()=>{
    const { loading, data: shop, error } = state;
    if(shop) {
      alertRef4.current.showAlert();
    } else if(error) {
      alertRef5.current.showAlert();
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
      varContactNumber1={varContactNumber1}
      varContactNumber2={varContactNumber2}
      varBusinessRegNumber={varBusinessRegNumber}
      varIntroduce={varIntroduce}
      onChangeText={onChangeText}
      varNationCode1={varNationCode1}
      varNationCode2={varNationCode2}
      onChangeNumber={onChangeNumber}
      nationCodeListAll={nationCodeListAll}
      snsList={varSnsList}
      setSnsList={setVarSnsList}

      // varImagePublic={varImagePublic}
      // varNamePublic={varNamePublic}
      // varZipcodePublic={varZipcodePublic}
      // varCityPublic={varCityPublic}
      // varStreetPublic={varStreetPublic}
      // varContactNumberPublic1={varContactNumberPublic1}
      // varContactNumberPublic2={varContactNumberPublic2}
      // varBusinessRegNumberPublic={varBusinessRegNumberPublic}
      // varIntroducePublic={varIntroducePublic}
      // onCheck={onCheck}

      // alertRef1={alertRef1} // 가게이름은 항상 공개합니다.
      // alertRef2={alertRef2} // 가게소개는 항상 공개합니다.
      // alertRef3={alertRef3} // 사업자번호는 항상 공개합니다.
      alertRef4={alertRef4} // 저장 했습니다.
      alertRef5={alertRef5} // 죄송합니다. 오류로 인해 저장 실패했습니다. 개발자에게 문의해주세요.

      // AlertModal1={AlertModal1}
      // AlertModal2={AlertModal2}
      // AlertModal3={AlertModal3}
      AlertModal4={AlertModal4}
      AlertModal5={AlertModal5}

      refetch={onRefetch}
      />
    </>
  );
}

ModifyProfileContainer.propTypes = {
  id: PropTypes.number,
  businessRegNumber: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
  street: PropTypes.string,
  contactNumber1: PropTypes.string,
  contactNumber2: PropTypes.string,
  snsList: PropTypes.array,
  zipcode: PropTypes.string,
  // openingHours: PropTypes.array,
  introduce: PropTypes.string,
};

export default ModifyProfileContainer;
