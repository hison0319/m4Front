/*
작성자 : 손한이
작성일 : 2021.11.28
내용 : shop manager의 Dashboard - 화이트 고객 명단 (기능)
*/
import React, { useState, useEffect, useContext, useRef } from 'react'
import WhiteList from './WhiteList';
import ModalNormalProfileView from "components/common/modalView/ModalNormalProfileView"
import ModalBusinessProfileView from "components/common/modalView/ModalBusinessProfileView"
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"

async function getWhite(id, pageNum) {
    const response = await axios.get(
      `/api/v1/shopWhite/${id}${pageNum}`
    );
    return response.data;
}

const WhiteListContainer = React.memo(() => {
    // page nation 정의
    const [curPage, setCurPage] = useState(3);
    
    // 방문자 리스트 get api
    const {spinner} = useContext(ProgressContext);
    const _id = 1; //temporary
    const [state] = useAsync(() => getWhite(_id, curPage), [_id], false);
    const { loading, data: whites, error } = state;
    const totalPage = 4;

     // page nation 기능
     const onSetCurPage = (page) => {
        setCurPage(page);
        getWhite(_id, page);
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
            id:"w001",
            userId:"hison0319",
            name:"손한이1",
            visitDate:"2021-11-16",
            comment:"매우 훌륭한 인성"
        },
        {
            id:"w002",
            userId:"hison0319",
            name:"손한이2",
            visitDate:"2021-11-16",
            comment:"매우 훌륭한 인성"
        },
        {
            id:"w003",
            userId:"hison0319",
            name:"손한이3",
            visitDate:"2021-11-16",
            comment:"매우 훌륭한 인성"
        },
        {
            id:"w004",
            userId:"hison0319",
            name:"손한이4",
            visitDate:"2021-11-16",
            comment:"매우 훌륭한 인성"
        },
        {
            id:"w005",
            userId:"hison0319",
            name:"손한이5",
            visitDate:"2021-11-16",
            comment:"매우 훌륭한 인성"
        }
    ];
    const [whiteList, setWhiteList] = useState(testData);

    // get useEffect
    useEffect(() => {
        // if(whites) {
        //     setWhiteList(whites);
        // }
        if(loading) {
            spinner.start();
        } else {
            spinner.stop();
        }
        if(error) {
        // window.location.href = '/error/100';
        }
    },[loading, error, spinner, whites]);


    return (
        <>
            <WhiteList
            curPage = {curPage}
            totalPage = {totalPage}
            onSetCurPage = {onSetCurPage}
            whiteList= {whiteList}
            onModal={onModal}
            />
            {modalNormalProfileView}
            {modalBusinessProfileView}
        </>
    );
});

export default WhiteListContainer;