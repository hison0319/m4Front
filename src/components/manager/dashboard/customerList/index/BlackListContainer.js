/*
작성자 : 손한이
작성일 : 2021.11.28
내용 : shop manager의 Dashboard - 블랙 고객 명단 (기능)
*/
import React, { useState, useEffect, useContext, useRef } from 'react'
import BlackList from './BlackList';
import ModalNormalProfileView from "components/common/modalView/ModalNormalProfileView"
import ModalBusinessProfileView from "components/common/modalView/ModalBusinessProfileView"
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"

async function getBlack(id, pageNum) {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}api/v1/shopBlack/${id}${pageNum}`
    );
    return response.data;
}

const BlackListContainer = React.memo(() => {
    // page nation 정의
    const [curPage, setCurPage] = useState(3);
    
    // 방문자 리스트 get api
    const {spinner} = useContext(ProgressContext);
    const _id = 1; //temporary
    const [state] = useAsync(() => getBlack(_id, curPage), [_id], false);
    const { loading, data: blacks, error } = state;
    const totalPage = 4;

     // page nation 기능
     const onSetCurPage = (page) => {
        setCurPage(page);
        getBlack(_id, page);
    }

    // 프로필 클릭 시 모달 뷰 오픈
    const modalNormalProfileViewRef = useRef();
    const modalBusinessProfileViewRef = useRef();
    const modalNormalProfileView = 
    <ModalNormalProfileView
    ref={modalNormalProfileViewRef}
    closingModal={()=>{
    //nothing
    }}
    />;
    const modalBusinessProfileView = 
    <ModalBusinessProfileView
    ref={modalBusinessProfileViewRef}
    closingModal={()=>{
    //nothing
    }}
    />;
    const onModal = (userId) => {
        //type 또는 userId code에 따라 shop인지, user인지 구분하여 출력
        if(userId) {
            modalNormalProfileViewRef.current.onSetUserId(userId);
            modalNormalProfileViewRef.current.showAlert();
        } else {
            modalBusinessProfileViewRef.current.onSetUserId(userId);
            modalBusinessProfileViewRef.current.showAlert();
        }
    }

    // 방문자 리스트
    const testData = [
        {
            id:"b001",
            userId:"hison0319",
            name:"이관호1",
            visitDate:"2021-11-16",
            comment:"성격 파탄 의심"
        },
        {
            id:"b002",
            userId:"hison0319",
            name:"이관호2",
            visitDate:"2021-11-16",
            comment:"성격 파탄 의심"
        },
        {
            id:"b003",
            userId:"hison0319",
            name:"이관호3",
            visitDate:"2021-11-16",
            comment:"성격 파탄 의심"
        },
        {
            id:"b004",
            userId:"hison0319",
            name:"이관호4",
            visitDate:"2021-11-16",
            comment:"성격 파탄 의심"
        },
        {
            id:"b005",
            userId:"hison0319",
            name:"이관호5",
            visitDate:"2021-11-16",
            comment:"성격 파탄 의심"
        },
    ];
    const [blackList, setBlackList] = useState(testData);

    // get useEffect
    useEffect(() => {
        // if(blacks) {
        //     setBlackList(blacks);
        // }
        if(loading) {
            spinner.start();
        } else {
            spinner.stop();
        }
        if(error) {
        // window.location.href = '/error/100';
        }
    },[loading, error, spinner, blacks]);
    return (
        <>
            <BlackList
            curPage = {curPage}
            totalPage = {totalPage}
            onSetCurPage = {onSetCurPage}
            blackList= {blackList}
            onModal={onModal}
            />
            {modalNormalProfileView}
            {modalBusinessProfileView}
        </>
    );
});

export default BlackListContainer;