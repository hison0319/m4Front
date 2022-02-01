/*
작성자 : 손한이
작성일 : 2021.12.11
내용 :  alarmlist (기능)
       API - get
*/
import React, { useState, useEffect, useContext, useRef } from 'react';
import {
    Container,
} from 'reactstrap';
import AlarmLists from './AlarmLists';
import ModalBookingManagerView from 'components/common/modalView/ModalBookingManagerView';
import ModalBoardDetailView from "components/common/modalView/ModalBoardDetailView"
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"

async function getAlarm(id) {
    const response = await axios.get(
      `/api/v1/shopBooking/${id}`
    );
    return response.data;
}

const AlarmListContainer = () => {
    // 알람 목록 번호
    const getAlarmIdx = useRef(0);

    //borad detail 내용 get API
    const {spinner} = useContext(ProgressContext);
    const _id = 1; //temporary
    const [state] = useAsync(() => getAlarm(_id), [_id], false);
    const { loading, data: alarm, error } = state;
    
    let getScrollEventToggle = true; //나중에 false
    useEffect(() => {
        if(loading) {
        spinner.start();
        } else {
        getScrollEventToggle = true;
        spinner.stop();
        }
        if(error) {
        // window.location.href = '/error/100';
        }
    },[loading, error, spinner]);

    const modalBookingManagerViewRef = useRef();
    const modalBoardDetailViewRef = useRef();
    const modalBookingManagerView = 
    <ModalBookingManagerView
        ref={modalBookingManagerViewRef}
        closingModal={()=>{
        //nothing
        }}
    />;
    const modalBoardDetailView = 
    <ModalBoardDetailView
        ref={modalBoardDetailViewRef}
        closingModal={()=>{
        //nothing
        }}
    />;

    const onModal = (type, id) => {
        //type 또는 userId code에 따라 shop인지, user인지 구분하여 출력
        if(type === "B") {
            modalBookingManagerViewRef.current.onSetDate(id);
            modalBookingManagerViewRef.current.showAlert();
        } else if(type === "R") {
            modalBoardDetailViewRef.current.onSetShopId("shop001");
            modalBoardDetailViewRef.current.onSetReviewId(id);
            modalBoardDetailViewRef.current.showAlert();
        }
    }

    const testAlarmLists = [
        {
            period:"오늘",
            alarmList:[
                {
                    alarmId:"A0001",
                    type:"B",
                    userId:"A0001",
                    name:"손한이",
                    context:"[ 2021-12-15 08:00 ] ¥15,000",
                    regDate:"2021-12-14 18:00",
                    reviewId:"",
                    bookingDate:"2021-12-20",
                },
                {
                    alarmId:"A0002",
                    type:"R",
                    userId:"A0002",
                    name:"이부장",
                    context:"재밌게 잘 놀다 갑니다~ 네가 사면~ 나는 먹지~ 내용내용 내용~~ 무야호~ 댓글이닷!",
                    regDate:"2021-12-16 18:00",
                    reviewId:"R1020",
                    bookingDate:"",
                },
            ]
        },
        {
            period:"1주",
            alarmList:[
                {
                    alarmId:"A0003",
                    type:"B",
                    userId:"A0003",
                    name:"손한이",
                    context:"[ 2021-12-15 08:00 ] ¥15,000",
                    regDate:"2021-12-14 18:00",
                    reviewId:"",
                    bookingDate:"2021-12-20",
                },
                {
                    alarmId:"A0004",
                    type:"R",
                    userId:"A0004",
                    name:"이부장",
                    context:"재밌게 잘 놀다 갑니다~ 네가 사면~ 나는 먹지~ 내용내용 내용~~ 무야호~ 댓글이닷!",
                    regDate:"2021-12-16 18:00",
                    reviewId:"R1020",
                    bookingDate:"",
                },
                {
                    alarmId:"A0006",
                    type:"B",
                    userId:"A0005",
                    name:"손한이",
                    context:"[ 2021-12-15 08:00 ] ¥15,000",
                    regDate:"2021-12-14 18:00",
                    reviewId:"",
                    bookingDate:"2021-12-20",
                },
                {
                    alarmId:"A0005",
                    type:"R",
                    userId:"A0006",
                    name:"이부장",
                    context:"재밌게 잘 놀다 갑니다~ 네가 사면~ 나는 먹지~ 내용내용 내용~~ 무야호~ 댓글이닷!",
                    regDate:"2021-12-16 18:00",
                    reviewId:"R1020",
                    bookingDate:"",
                },
            ]
        },
        {
            period:"한달",
            alarmList:[
                {
                    alarmId:"A0007",
                    type:"B",
                    userId:"A0007",
                    name:"이부장",
                    context:"[ 2021-12-15 08:00 ] ¥15,000",
                    regDate:"2021-12-14 18:00",
                    reviewId:"",
                    bookingDate:"2021-12-20",
                },
                {
                    alarmId:"A0008",
                    type:"R",
                    userId:"A0008",
                    name:"이부장",
                    context:"재밌게 잘 놀다 갑니다~ 네가 사면~ 나는 먹지~ 내용내용 내용~~ 무야호~ 댓글이닷!",
                    regDate:"2021-12-16 18:00",
                    reviewId:"R1020",
                    bookingDate:"",
                },
                {
                    alarmId:"A0009",
                    type:"B",
                    userId:"A0009",
                    name:"손한이",
                    context:"[ 2021-12-15 08:00 ] ¥15,000",
                    regDate:"2021-12-14 18:00",
                    reviewId:"",
                    bookingDate:"2021-12-20",
                },
                {
                    alarmId:"A0010",
                    type:"R",
                    userId:"A0010",
                    name:"손한이",
                    context:"재밌게 잘 놀다 갑니다~ 네가 사면~ 나는 먹지~ 내용내용 내용~~ 무야호~ 댓글이닷!",
                    regDate:"2021-12-16 18:00",
                    reviewId:"R1020",
                    bookingDate:"",
                },
                {
                    alarmId:"A0011",
                    type:"B",
                    userId:"A0011",
                    name:"이부장",
                    context:"[ 2021-12-15 08:00 ] ¥15,000",
                    regDate:"2021-12-14 18:00",
                    reviewId:"",
                    bookingDate:"2021-12-20",
                },
                {
                    alarmId:"A0012",
                    type:"R",
                    userId:"A0012",
                    name:"손한이",
                    context:"재밌게 잘 놀다 갑니다~ 네가 사면~ 나는 먹지~ 내용내용 내용~~ 무야호~ 댓글이닷!",
                    regDate:"2021-12-16 18:00",
                    reviewId:"R1020",
                    bookingDate:"",
                },
            ]
        },
    ]

    useEffect(()=>{
        //for develop
        console.log("AlarmListContainer.js rendered!");
    }, []);

    const testGetAlarmLists = [
        {
            period:"",
            alarmList:[
                {
                    alarmId:"A0007",
                    type:"B",
                    userId:"A0007",
                    name:"이부장",
                    context:"[ 2021-12-15 08:00 ] ¥15,000",
                    regDate:"2021-12-14 18:00",
                    reviewId:"",
                    bookingDate:"2021-12-20",
                },
                {
                    alarmId:"A0008",
                    type:"R",
                    userId:"A0008",
                    name:"이부장",
                    context:"재밌게 잘 놀다 갑니다~ 네가 사면~ 나는 먹지~ 내용내용 내용~~ 무야호~ 댓글이닷!",
                    regDate:"2021-12-16 18:00",
                    reviewId:"R1020",
                    bookingDate:"",
                },
                {
                    alarmId:"A0009",
                    type:"B",
                    userId:"A0009",
                    name:"손한이",
                    context:"[ 2021-12-15 08:00 ] ¥15,000",
                    regDate:"2021-12-14 18:00",
                    reviewId:"",
                    bookingDate:"2021-12-20",
                },
                {
                    alarmId:"A0010",
                    type:"R",
                    userId:"A0010",
                    name:"손한이",
                    context:"재밌게 잘 놀다 갑니다~ 네가 사면~ 나는 먹지~ 내용내용 내용~~ 무야호~ 댓글이닷!",
                    regDate:"2021-12-16 18:00",
                    reviewId:"R1020",
                    bookingDate:"",
                },
                {
                    alarmId:"A0011",
                    type:"B",
                    userId:"A0011",
                    name:"이부장",
                    context:"[ 2021-12-15 08:00 ] ¥15,000",
                    regDate:"2021-12-14 18:00",
                    reviewId:"",
                    bookingDate:"2021-12-20",
                },
                {
                    alarmId:"A0012",
                    type:"R",
                    userId:"A0018",
                    name:"손한이",
                    context:"재밌게 잘 놀다 갑니다~ 네가 사면~ 나는 먹지~ 내용내용 내용~~ 무야호~ 댓글이닷!",
                    regDate:"2021-12-16 18:00",
                    reviewId:"R1020",
                    bookingDate:"",
                },
            ]
        },
    ]

    const [alarmLists, setAlarmLists] = useState(testAlarmLists);

    //스크롤 최하단 내릴 시 알림 불러오기
    let timer
    window.addEventListener("scroll", function() {
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            if(window.pageYOffset + window.innerHeight > document.documentElement.scrollHeight-30) {
                if (getScrollEventToggle) {
                    getScrollEventToggle = false;
                    getAlarmIdx.current += 1;
                    getAlarm(0,"",getAlarmIdx.current);
                    setAlarmLists(alarmLists.concat(testGetAlarmLists));
                }
            }
        }, 100);
    });

    return (
        <>
            <Container className="my-2 pb-3">
                <AlarmLists
                alarmLists={alarmLists}
                onModal={onModal}/>
            </Container>
            {modalBookingManagerView}
            {modalBoardDetailView}
        </>
    );
}

export default AlarmListContainer;