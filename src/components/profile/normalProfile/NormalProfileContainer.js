/*
작성자 : 손한이
작성일 : 2021.10.31
내용 :  일반 계정의 프로필(기능)
       API - userController - get
*/
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"
import NormalProfile from "./NormalProfile";

async function getUser(id) {
  const response = await axios.get(
    `/api/v1/user/${id}`
  );
  return response.data;
}

function NormalProfileContainer({userId}){
    const {spinner} = useContext(ProgressContext);
    const _id = 1; //임시
    const [state] = useAsync(() => getUser(_id), [_id], false);
    const { loading, data: user, error } = state;
    useEffect(() => {
        if(loading) {
            spinner.start();
        } else {
            spinner.stop();
        }
        if(error) {
            // window.location.href = '/error/200';
        }
    },[loading, error, spinner]);
    
    // const id = user?user.id:1;
    // const name = user?user.name:"손한이";
    // const zipcode = user?user.zipcode:"12345";
    // const city = user?user.city:"경기도 하남시";
    // const street = user?user.street:"미사강변동로47";
    // const nationCode = user?user.nationCode:82;
    // const contactNumber = user?user.contactNumber:"010-7530-0079";
    // const snsList = user?user.snsList:["https://www.instagram.com/his0319","https://www.facebook.com/his0319"];
    // const birth = user?user.birth:"1990-03-19";
    // const introduce = user?user.introduce:"안녕하세요. 손한이입니다. 잘부탁드립니다.";

    //forTest start
    console.log(userId);
    const id = 1;
    const name = "손한이";
    const zipcode = "12345";
    const city = "경기도 하남시";
    const street = "미사강변동로47";
    const nationCode = 82;
    const contactNumber = "010-7530-0079";
    const snsList = ["https://www.instagram.com/his0319","https://www.facebook.com/his0319"];
    const birth = "1990-03-19";
    const introduce = "안녕하세요. 손한이입니다. 하면 된다. 안하면 안된다! 현재를 즐겨라! 내일의 나를 믿자! 매너가 사람을 만든다! 잘부탁드립니다.";
    //end
    
    const [mode, setMode] = useState("R");

    const handleSetMode = (mode) => {
        mode === "M" ? mode = "M" : mode = "R";
        setMode(mode);
    }

    return (
        <>
            <NormalProfile
            mode={mode}
            handleSetMode={handleSetMode}
            id={id}
            name={name}
            zipcode={zipcode}
            city={city}
            street={street}
            nationCode={nationCode}
            contactNumber={contactNumber}
            snsList={snsList}
            birth={birth}
            introduce={introduce}
            />
        </>
    );
}

export default NormalProfileContainer;