/*
작성자 : 손한이
작성일 : 2021.12.05
내용 :  board detail 예약 (기능)
       API - get
*/
import React, { useState, useEffect, useContext } from 'react'
import BoardDetailBooking from './BoardDetailBooking';
import { useSelector, useDispatch } from "react-redux";
import {
    setCalpick2Date,
    addCalpick2Date,
    subCalpick2Date
} from 'modules/calendarPick2ForBoard';
import {
    setCalDate
} from 'modules/calendarForBoard';
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"

async function getBookingInfo(id, date) {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}api/v1/shopBookingInfo/${id}${date}`
    );
    return response.data;
}

const BoardDetailBookingContainer = React.memo(() => {
    // Redux CalenderPick2 operation
    const _calendarPick2 = useSelector(state => ({
        date : state.calendarPick2ForBoard.date
    }));
    const dispatch = useDispatch();
    const onSetCalpick2Date = (date) => {
        dispatch(setCalpick2Date(date));
        setSelectTime('');
    }
    const onAddCalpick2Date = () => {
        dispatch(addCalpick2Date());
        setSelectTime('');
    }
    const onSubCalpick2Date = () => {
        dispatch(subCalpick2Date());
        setSelectTime('');
    }
    // Redux Calender operation
    const _calendar = useSelector(state => ({
        date        : state.calendarForBoard.date,
        dateform    : state.calendarForBoard.dateform,
        year        : state.calendarForBoard.year,
        month       : state.calendarForBoard.month,
        day         : state.calendarForBoard.day,
        week        : state.calendarForBoard.week,
        days        : state.calendarForBoard.days,
    }));

    const sysdate = _calendarPick2.date.format('YYYY-MM-DD');

    const {spinner} = useContext(ProgressContext);
    const _id = 1; //temporary
    const [state] = useAsync(() => getBookingInfo(_id,sysdate), [_id], false);
    const { loading, data: bookingInfo, error } = state;
    
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

    // booking time infomations
    const [selectTime, setSelectTime] = useState('');

    const ableTime = ['08:00','09:00','10:00','11:00','12:00','14:00','15:00','16:00','17:00','18:00'];
    const disableTime = ['10:00','12:00','14:00','15:00','18:00'];

    const onSelectTime = (time) => {
        setSelectTime(time);
    }

    // booking option infomations
    const optionSingle = [
        {
            type:"종류1",
            key:"a001",
            option:[
                {
                    name:"종류1이름1",
                    price:"100",
                    ea:0,
                    key:"a0001"
                },
                {
                    name:"종류1이름2",
                    price:"500",
                    ea:0,
                    key:"a0002"
                },
                {
                    name:"종류1이름3",
                    price:"600",
                    ea:0,
                    key:"a0003"
                },
            ]
        },
        {
            type:"종류2",
            key:"a002",
            option:[
                {
                    name:"종류2이름1",
                    price:"10000",
                    ea:10,
                    key:"a0004"
                },
                {
                    name:"종류2이름2",
                    price:"5000",
                    ea:5,
                    key:"a0005"
                },
                {
                    name:"종류2이름3",
                    price:"18000",
                    ea:1,
                    key:"a0006"
                },
            ]
        },
    ]
    const optionMultiple = [
        {
            type:"종류1",
            key:"a003",
            option:[
                {
                    name:"종류1이름1",
                    price:"100",
                    ea:0,
                    key:"a0007"
                },
                {
                    name:"종류1이름2",
                    price:"500",
                    ea:0,
                    key:"a0008"
                },
                {
                    name:"종류1이름3",
                    price:"600",
                    ea:0,
                    key:"a0009"
                },
            ]
        },
        {
            type:"종류2",
            key:"a004",
            option:[
                {
                    name:"종류2이름1",
                    price:"10000",
                    ea:10,
                    key:"a0010"
                },
                {
                    name:"종류2이름2",
                    price:"5000",
                    ea:5,
                    key:"a0011"
                },
                {
                    name:"종류2이름3",
                    price:"18000",
                    ea:1,
                    key:"a0012"
                },
            ]
        },
    ]

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
        //for develop
        console.log("BoardDetailBookingContainer.js rendered!");
    }, []);

    return (
        <>
            <BoardDetailBooking
            // For CalenderPick2
            localDate       = {localDate}
            onPreCal        = {onPreCal}
            onPickCal       = {onPickCal}
            onNextCal       = {onNextCal}
            // For Calender
            calendarInfo    = {_calendar}
            bookingsInfo    = {monthBookings}
            // For SelectTime
            ableTime        = {ableTime}
            disableTime     = {disableTime}
            selectTime      = {selectTime}
            onSelectTime    = {onSelectTime}
            // For SelectOption
            optionSingle    = {optionSingle}
            // For CheckOption
            optionMultiple  = {optionMultiple}
            />
        </>
    );
});

export default BoardDetailBookingContainer;