import React, { useState, useEffect } from 'react'
import WhiteList from './WhiteList';

const WhiteListContainer = React.memo(() => {
    useEffect(() => {
        // console.log('WhiteListContainer is rendering!')
    })
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
    return (
        <>
            <WhiteList
            curPage = {curPage}
            pickPage = {pickPage}
            prePage = {prePage}
            nextPage = {nextPage}
            preShiftPage = {preShiftPage}
            nextShiftPage = {nextShiftPage}
            />
        </>
    );
});

export default WhiteListContainer;