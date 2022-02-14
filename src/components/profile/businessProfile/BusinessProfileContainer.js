/*
작성자 : 손한이
작성일 : 2021.10.25
내용 :  비지니스 계정의 프로필(기능)
       API - ShopController - get
*/
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"
import BusinessProfile from "./BusinessProfile";

import { images } from "utils/images";

async function getShop(shopId) {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}shop/${shopId}`
  );
  console.log(response);
  return response.data;
}

const BusinessProfileContainer = ({shopId}) => {
    const {spinner} = useContext(ProgressContext);
    shopId = "1"; //임시
    const [state] = useAsync(() => getShop(shopId), [shopId], false);
    const { loading, data: shop, error } = state;
    useEffect(() => {
        if(loading) {
            spinner.start();
        } else {
            spinner.stop();
        }
        if(error) {
            console.log(error.response);
            // window.location.href = '/error/200';
        }
    },[loading, error, spinner]);

    // const shopId = shop?shop.shopId:0;
    // const businessRegNumber = shop?shop.businessRegNumber:"";
    // const name = shop?shop.name:"";
    // const city = shop?shop.city:"";
    // const street = shop?shop.street:"";
    // const nationCode1 = shop?shop.nationCode:82;
    // const nationCode2 = shop?shop.nationCode:69;
    // const contactNumber1 = shop?shop.contactNumber:"";
    // const contactNumber2 = shop?shop.contactNumber2:"";
    // const snsList = shop?shop.snsList:["https://www.instagram.com/his0319","https://www.facebook.com/his0319"];
    // const zipcode = shop?shop.zipcode:"";
    // const openingHours = shop?shop.openingHours:[];
    // const introduce = shop?shop.introduce:"안녕하세요. 손한이 편집샵입니다. 잘부탁드립니다.";
    // const introduce = "안녕하세요. 손한이 편집샵입니다. 잘부탁드립니다. 에~~~호 무야호~";
    // option hour 필요없음, sns주소(배열), 자기소개, 연락처(배열)(국가코드), 프로필 경로 필요
    
    //forTest start
    const businessRegNumber = "123-456-7890";
    const name = "한이's 편집샵";
    const city = "경기도 하남시";
    const street = "미사강변동로 47";
    const nationCode1 = 82;
    const nationCode2 = 69;
    const contactNumber1 = "010-7530-0079";
    const snsList = ["https://www.instagram.com/his0319","https://www.facebook.com/his0319"];
    const zipcode = "12345";
    const openingHours = "09:00 ~ 18:00";
    const introduce = "안녕하세요. 손한이 편집샵입니다. 잘부탁드립니다. 에~~~호 무야호~";
    const imageURL = images.imgTest1;
    //end

    const [mode, setMode] = useState("R");
    const link = '/manager'

    const handleSetMode = (mode) => {
        mode === "M" ? mode = "M" : mode = "R";
        setMode(mode);
    }

    useEffect(()=>{
        //for develop
        console.log("BusinessProfileContainer.js rendered!");
    }, []);

    return (
        <>
            <BusinessProfile
            mode={mode}
            link={link}
            handleSetMode={handleSetMode}
            
            shopId={shopId}
            businessRegNumber={businessRegNumber}
            name={name}
            city={city}
            street={street}
            nationCode1={nationCode1}
            nationCode2={nationCode2}
            contactNumber1={contactNumber1}
            // contactNumber2={contactNumber2}
            snsList={snsList}
            zipcode={zipcode}
            openingHours={openingHours}
            introduce={introduce}

            imageURL={imageURL}
            />
        </>
    );
}

export default BusinessProfileContainer;