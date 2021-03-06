/*
작성자 : 손한이
작성일 : 2021.11.28
내용 : shop manager의 Dashboard - 방문 고객 명단 (기능)
      API - get, put
*/
import React, { useState, useEffect, useContext, useRef } from 'react'
import VisitorList from './VisitorList';
import ModalNormalProfileView from "components/common/modalView/ModalNormalProfileView"
import ModalBusinessProfileView from "components/common/modalView/ModalBusinessProfileView"
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"
import { 
    getIndexEqualKey,
    modifyArrayWithIdx,
} from "utils/common"

async function getVisitors(id, pageNum) {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}api/v1/shopVisitor/${id}${pageNum}`
        );
        return response.data;
    }
    
    async function putVisitors(id, visitors) {
        const response = await axios.put(
        `${process.env.REACT_APP_API_URL}api/v1/shopVisitor/${id}`
        ,visitors
    );
    return response.data;
}

const VisitorListContainer = () => {
    // page nation 정의
    const [curPage, setCurPage] = useState(7);
    
    // 방문자 리스트 get api
    const {spinner} = useContext(ProgressContext);
    const _id = 1; //temporary
    const [getState] = useAsync(() => getVisitors(_id, curPage), [_id], false);
    const { loading, data: visitors, error } = getState;
    const totalPage = 12;

    // page nation 기능
    const onSetCurPage = (page) => {
        setCurPage(page);
        getVisitors(_id, page);
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
            id:"vis001",
            userId:"hison0319",
            name:"손한이",
            visitDate:"2021-11-16",
            type:"W",
            comment:"훌륭한 인성",
        },
        {
            id:"vis002",
            userId:"hison0319",
            name:"이관호",
            visitDate:"2021-11-17",
            type:"B",
            comment:"파탄난 인성",
        },
        {
            id:"vis003",
            userId:"hison0319",
            name:"손한이2",
            visitDate:"2021-11-18",
            type:"N",
            comment:"괜찮은 인성",
        },
        {
            id:"vis004",
            userId:"hison0319",
            name:"손한이3",
            visitDate:"2021-11-19",
            type:"W",
            comment:"훌륭한 인성",
        },
        {
            id:"vis005",
            userId:"hison0319",
            name:"이관호2",
            visitDate:"2021-11-20",
            type:"B",
            comment:"별로인 인성",
        },
    ];
    const [visitorList, setVisitorList] = useState(testData);

    //매너등급 저장 (chg state, put)
    const onSetVisitorList = (id, val) => {
        const idx = getIndexEqualKey(visitorList, "id", id);
        const newVisitorList = modifyArrayWithIdx(visitorList, idx, val);
        console.log(newVisitorList)
        setVisitorList(newVisitorList);
        onRefetch();
    }

    // 방문자 리스트 put api
    const [putState, refetch] = useAsync(() => putVisitors(visitorList,_id), [], true);
    
    const onRefetch = () => {
        refetch();
    }

    // get useEffect
    useEffect(() => {
        // if(visitors) {
        //     setVisitorList(visitors);
        // }
        if(loading) {
            spinner.start();
        } else {
            spinner.stop();
        }
        if(error) {
        // window.location.href = '/error/100';
        }
    },[loading, error, spinner, visitors]);

    return (
        <>
            <VisitorList
            curPage = {curPage}
            totalPage = {totalPage}
            onSetCurPage = {onSetCurPage}
            visitorList= {visitorList}
            onSetVisitorList={onSetVisitorList}
            onModal={onModal}
            />
            {modalNormalProfileView}
            {modalBusinessProfileView}
        </>
    );
};

export default VisitorListContainer;