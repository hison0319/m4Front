/*
작성자 : 손한이
작성일 : 2021.11.28
내용 : shop manager의 Dashboard - 방문 고객 명단 (기능)
      API - get, put
*/
import React, { useState, useEffect, useContext } from 'react'
import VisitorList from './VisitorList';
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"
import { 
    getIndexEqualKey,
    modifyArrayWithKey,
} from "utils/common"

async function getVisitors(id, pageNum) {
    const response = await axios.get(
      `/api/v1/shopVisitor/${id}${pageNum}`
    );
    return response.data;
  }

const VisitorListContainer = () => {
    useEffect(() => {
        // console.log('VisitorListContainer is rendering!')
    })
    // page nation 기능
    const [curPage, setCurPage] = useState(1);
    const MIN = 1
    const MAX = 10;

    const pickPage = (_pickPage) => {
        setCurPage(_pickPage);
    }
    const prePage = () => {
        const _chgPage = curPage===MIN?curPage:curPage - 1
        setCurPage(_chgPage);
    }
    const nextPage = () => {
        const _chgPage = curPage===MAX?curPage:curPage + 1
        setCurPage(_chgPage);
    }
    const preShiftPage = () => {
        const _chgPage = curPage-5<MIN?MIN:curPage - 5
        setCurPage(_chgPage);
    }
    const nextShiftPage = () => {
        const _chgPage = curPage+5>MAX?MAX:curPage + 5
        setCurPage(_chgPage);
    }

    // 방문자 리스트 get api
    const {spinner} = useContext(ProgressContext);
    const _id = 1; //temporary
    const [getState] = useAsync(() => getVisitors(_id), [_id], false);
    const { loading, data: visitors, error } = getState;
    
    useEffect(() => {
        if(loading) {
        spinner.start();
        } else {
        spinner.stop();
        }
        if(error) {
        // window.location.href = '/error/100';
        }
    },[loading, error, spinner]);

    const [visitorList, setVisitorList] = useState(visitors?visitors:
    [
        {
            id:"vis001",
            userId:"hison0319",
            name:"손한이",
            visitDate:"2021-11-16",
            type:"W"
        },
        {
            id:"vis002",
            userId:"hison0319",
            name:"이관호",
            visitDate:"2021-11-17",
            type:"B"
        },
        {
            id:"vis003",
            userId:"hison0319",
            name:"손한이2",
            visitDate:"2021-11-18",
            type:"N"
        },
        {
            id:"vis004",
            userId:"hison0319",
            name:"손한이3",
            visitDate:"2021-11-19",
            type:"W"
        },
        {
            id:"vis005",
            userId:"hison0319",
            name:"이관호2",
            visitDate:"2021-11-20",
            type:"B"
        },
    ]);

    //매너등급 저장 (chg state, put)
    const onSetVisitorList = (id, key, val) => {
        const idx = getIndexEqualKey(visitorList, "id", id);
        const newVisitorList = modifyArrayWithKey(visitorList, idx, key, val);
        setVisitorList(newVisitorList);
    }
    

    return (
        <>
            <VisitorList
            curPage = {curPage}
            pickPage = {pickPage}
            prePage = {prePage}
            nextPage = {nextPage}
            preShiftPage = {preShiftPage}
            nextShiftPage = {nextShiftPage}
            visitorList= {visitorList}
            onSetVisitorList={onSetVisitorList}
            />
        </>
    );
};

export default VisitorListContainer;