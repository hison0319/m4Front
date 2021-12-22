/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager의 예약 확인 (기능)
       API - get
*/
import React, { useState, useEffect, useContext, useRef } from 'react'
import BookingManager from './BookingManager';
import ModalNormalProfileView from "components/common/modalView/ModalNormalProfileView"
import ModalBusinessProfileView from "components/common/modalView/ModalBusinessProfileView"
import { useSelector, useDispatch } from "react-redux";
import {
    setCalpick2Date,
    addCalpick2Date,
    subCalpick2Date
} from 'modules/calendarPick2ForManager';
import {
    setCalDate
} from 'modules/calendarForManager';
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"

async function getBookings(id, date) {
    const response = await axios.get(
      `/api/v1/shopBooking/${id}${date}`
    );
    return response.data;
}

const BookingManagerContainer = ({propDate}) => {
    useEffect(() => {
        // console.log('BookingManagerContainer is rendering!')
    })
    
    // Redux CalenderPick2 operation
    const _calendarPick2 = useSelector(state => ({
        date : state.calendarPick2ForManager.date
    }));

    const dispatch = useDispatch();
    const onSetCalpick2Date = (date) => dispatch(setCalpick2Date(date));
    const onAddCalpick2Date = () => dispatch(addCalpick2Date());
    const onSubCalpick2Date = () => dispatch(subCalpick2Date());
    
    // Redux Calender operation
    const _calendar = useSelector(state => ({
        date        : state.calendarForManager.date,
        dateform    : state.calendarForManager.dateform,
        year        : state.calendarForManager.year,
        month       : state.calendarForManager.month,
        day         : state.calendarForManager.day,
        week        : state.calendarForManager.week,
        days        : state.calendarForManager.days,
    }));

    const chkDate = _calendarPick2.date.format('YYYY-MM-DD');

    const {spinner} = useContext(ProgressContext);
    const _id = 1; //temporary
    const [state] = useAsync(() => getBookings(_id,chkDate), [_id], false);
    const { loading, data: bookings, error } = state;
    
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

    // Redux Axios bookings info
    const monthBookings = [
        {
            date : "2021-12-03",
            num : 5
        },
        {
            date : "2021-12-05",
            num : 3
        },
        {
            date : "2021-12-14",
            num : 8
        },
        {
            date : "2021-12-25",
            num : 6
        },
        {
            date : "2022-01-01",
            num : 3
        },
    ];

    const dayBookings = [
        {
            startDateTime:8,
            endDateTime:9,
            userId:"hison0319",
            userName:"뚝이",
            reservationOption:
            [
                {
                    optionsCategory:
                    {
                        name:"사진사",
                        option:
                        [{
                            name:"손한이",
                            count:1,
                        }]
                    },
                }
            ],
            price:25000,
        },
        {
            startDateTime:14,
            endDateTime:18,
            userId:"hison0319",
            userName:"뚜루기",
            reservationOption:
            [
                {
                    optionsCategory:
                    {
                        name:"사진사",
                        option:
                        [{
                            name:"이관호",
                            count:1,
                        }]
                    },
                },
                {
                    optionsCategory:
                    {
                        name:"소품",
                        option:
                        [{
                            name:"의자",
                            count:2,
                        }]
                    },
                }
            ],
            price:15000,
        },
    ];

    const onSetCalDate = (date) => dispatch(setCalDate(date));
    
    // BookingManagerContainer operation
    const [localDate, setLocalDate] = useState(_calendarPick2.date);
    
    const onPickCal = (setDate) => {
        onSetCalpick2Date(setDate);
        onSetCalDate(setDate);
        setLocalDate(setDate);
    }

    const onPreCal = () => {
        let newDate = localDate.clone().subtract(1,'days')
        onSetCalDate(newDate);
        onSubCalpick2Date();
    }
    
    const onNextCal = () => {
        let newDate = localDate.clone().add(1,'days')
        onSetCalDate(newDate);
        onAddCalpick2Date();
    }

    useEffect(()=>{
        if(propDate) {
            onPickCal(propDate);
        }
    },[propDate])

    return (
        <>
            <BookingManager
            // For CalenderPick2
            localDate       = {localDate}
            onPreCal        = {onPreCal}
            onPickCal       = {onPickCal}
            onNextCal       = {onNextCal}
            // For Calender
            calendarInfo    = {_calendar}
            bookingsInfo    = {monthBookings}
            // For TimeTable
            dayBookings     = {dayBookings}
            onModal         = {onModal} 
            />
            {modalNormalProfileView}
            {modalBusinessProfileView}
        </>
    );
};

export default BookingManagerContainer;