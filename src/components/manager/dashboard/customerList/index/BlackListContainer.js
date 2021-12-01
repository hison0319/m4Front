/*
작성자 : 손한이
작성일 : 2021.11.28
내용 : shop manager의 Dashboard - 블랙 고객 명단 (기능)
*/
import React, { useState, useEffect, useContext } from 'react'
import BlackList from './BlackList';
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"

async function getBlack(id, pageNum) {
    const response = await axios.get(
      `/api/v1/shopBlack/${id}${pageNum}`
    );
    return response.data;
}

const BlackListContainer = React.memo(() => {
    useEffect(() => {
        // console.log('BlackListContainer is rendering!')
    })

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
    const [blackList, setBlackList] = useState(blacks?blacks:testData);

    // get useEffect
    useEffect(() => {
        if(blacks) {
            setBlackList(blacks);
        }
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
            />
        </>
    );
});

export default BlackListContainer;