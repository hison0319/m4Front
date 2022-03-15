/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop 등록 (기능)
       API - post
*/
import React, { useState, useEffect, useContext, useRef } from 'react';
import ShopRegister from './ShopRegister';
import axios from 'axios';
import useAsync from "utils/useAsync";
import AlertModal from 'components/common/alert/AlertModal';
import { ProgressContext } from "context/Progress"

async function registShop(memberId, type) {
  const response = await axios.post(
      `${process.env.REACT_APP_API_URL}shop/${memberId}`,
      {
          shopType: type,
      },
  );
  return response.data;
}

const ShopRegisterContainer = () => {
  // 비지니스 계정 등록
  const memberId = 1; //임시

  const {spinner} = useContext(ProgressContext);
  const [state, refetch] = useAsync(() => registShop(
    memberId, shopType
  ), [], true);
  
  const onRefetch = () => {
      refetch();
  }

  const alertRef1 = useRef();
  const AlertModal1 = 
  <AlertModal
  ref={alertRef1}
  comment="죄송합니다. 오류로 인해 등록을 실패했습니다. 개발자에게 문의해주세요."
  closingModal={()=>{
  }}
  />;

  useEffect(()=>{
      const { loading, data: shop, error } = state;
      if(shop) {
        console.log(shop);
      } else if(error) {
        console.log(error.response);
        alertRef1.current.showAlert();
      }
      if(loading) {
        spinner.start();
      } else {
        spinner.stop();
      }
  },[state]);

  const [shopType, setShopType] = useState("1000");
  const shopTypeList = [
    {text:'사진관', value:"1000"},
    {text:'음식점', value:"2000"},
    {text:'헤어샵', value:"3000"},
    {text:'공간대여', value:"4000"},
    {text:'의상대여', value:"5000"},
    {text:'숙박업소', value:"6000"},
  ];

  useEffect(()=>{
    //for develop
    console.log("ShopRegisterContainer.js rendered!");
  }, []);
  
  return (
    <>
      {AlertModal1}
      <ShopRegister
      shopType={shopType}
      setShopType={setShopType}
      shopTypeList={shopTypeList}
      onRefetch={onRefetch}
      />
    </>
  );
};

export default ShopRegisterContainer;
