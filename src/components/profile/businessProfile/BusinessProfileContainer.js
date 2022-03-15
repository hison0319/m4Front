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

async function getShop(_memberId) {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}member/${_memberId}`
  );
  return response.data;
}

const BusinessProfileContainer = ({memberId}) => {
    const {spinner} = useContext(ProgressContext);
    memberId = memberId?memberId:"2"; //임시
    const [state] = useAsync(() => getShop(memberId), [memberId], false);
    const { loading, data: member, error } = state;
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

    const businessRegNumber = member?member.data.businessRegNumber:"";
    const name = member?member.data.name:"";
    const city = member?member.data.city:"";
    const street = member?member.data.street:"";
    const zipcode = member?member.data.zipcode:"";
    // const nationCode1 = member?member.data.nationCode1:82;
    // const nationCode2 = member?member.data.nationCode2:69;
    const contactNumber1 = member?member.data.contactNumbers.values[0].value:"";
    // const contactNumber2 = member?member.data.contactNumbers.values[1].value:"";
    const snsList = member?member.data.snsList:["https://www.instagram.com/his0319","https://www.facebook.com/his0319"];
    const introduce = member?member.data.introduce:"";
    const imageURL = images.imgTest1;
    // sns주소(배열), 자기소개, 연락처(배열)(국가코드), 프로필 경로 필요

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
            
            memberId={memberId}
            businessRegNumber={businessRegNumber}
            name={name}
            city={city}
            street={street}
            // nationCode1={nationCode1}
            // nationCode2={nationCode2}
            contactNumber1={contactNumber1}
            // contactNumber2={contactNumber2}
            snsList={snsList}
            zipcode={zipcode}
            introduce={introduce}

            imageURL={imageURL}
            />
        </>
    );
}

export default BusinessProfileContainer;