/*
작성자 : 손한이
작성일 : 2021.12.05
내용 :  board detail (기능)
       API - get
*/
import React, { useState, useEffect, useContext, useRef } from 'react';
import {
    Container,
    Button,
} from 'reactstrap';
import BoardDetailRead from "./BoardDetailRead";
import ModalView from "components/common/modalView/ModalView"
import BoardDetailBookingContainer from './BoardDetailBookingContainer';
import ReviewListContainer from 'components/review/ReviewListContainer';
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"

async function getBoardDetail(id) {
    const response = await axios.get(
      `/api/v1/shopBooking/${id}`
    );
    return response.data;
}

const BoardDetailContainer = ({
    shopId,
    //for review
    reviewId
}) => {

    //borad detail 내용 get API
    const {spinner} = useContext(ProgressContext);
    const _id = 1; //temporary
    const [state] = useAsync(() => getBoardDetail(_id), [_id], false);
    const { loading, data: boardDetail, error } = state;
    
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

    const [imageItemList] = useState(boardDetail?boardDetail.imageItemList:[]);
    const [shopName] = useState("한이's 편집샵");
    const [context] = useState("아시아[7]에 서식하는 식육목(食肉目) 고양이과의 포유류. 현존하는 모든 고양이과 동물들 중 가장 큰 동물로 수컷의 무게는 100~360 kg, 암컷의 무게는 70~200 kg 정도 나간다. 또한 IUCN 멸종 위기 등급 EN인 멸종 위기 종이기도 하다.'호랑이'의 어원에는 여러 설이 있으나 범을 뜻하는 虎와 이리를 뜻하는 狼에 접미사가 붙어(虎+狼+이) 육식 맹수를 가리키던 것이 점차 범 대신 호랑이라고 부르게 된 것으로 본다. 불교 용어로는 대충(大蟲)[8]이라고 부른다. 중국 소설 수호지에는 '모대충(母大蟲)'이란 별명을 가진 고대수라는 여자 호걸이 등장하는데, 모대충이란 말도 '암호랑이'라는 뜻. 같은 작품에 등장하는 설영 역시 별명이 병대충(病大蟲 - 호랑이만큼이나 용맹한 자)이다.한국에서는 한국 그 자체를 상징하는 말로도 쓰이는 동물이고 대한민국 축구 국가대표팀 엠블럼에도 들어간 동물이다. 순우리말로 범이라는 단어가 있고, 잘 발달되고 균형 잡힌 신체 구조와 느리게 움직이다가도 목표물을 향할 때의 빠른 몸놀림 그리고 빼어난 지혜와 늠름한 기품을 지녔다 하여 산군(山君), 산령 (山靈), 산신령(山神靈), 산중왕(山中王)으로 불렸다.");
    const [snsList] = useState(["https://www.instagram.com/his0319","https://www.instagram.com/his0319"]);

    //for modify container modal view
    const modalRef = useRef();

    useEffect(()=>{
        //for develop
        console.log("BoardDetailContainer.js rendered!");
    }, []);

    return (
        <>
            <Container className="my-2 pb-3">
                <BoardDetailRead
                imageItemList={imageItemList}
                shopName={shopName}
                context={context}
                snsList={snsList}
                />
                <ModalView
                ref={modalRef}
                item={<BoardDetailBookingContainer/>}
                closingModal={()=>{
                    //nothing
                }}
                />
                <div className="text-center btn-wrapper my-2">
                    <Button
                    className="width_100 main_button color_1 back_color_4 border_color_4"
                    // outline
                    type="button"
                    onClick={()=>{
                        modalRef.current.showAlert();
                    }}>
                    <span className="btn-inner--text">
                    예약하러 가기
                    </span>
                    </Button>
                </div>
                <ReviewListContainer
                userId={shopId}
                reviewId={reviewId}/>
            </Container>
        </>
    );
}

export default BoardDetailContainer;