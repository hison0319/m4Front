import React, { useState, useEffect } from 'react'
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

const BoardDetailBookingContainer = React.memo(() => {
    useEffect(() => {
        // console.log('BoardDetailBookingContainer is rendering!')
    })
    
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
    
    // Redux Axios bookings info
    const _bookings = [
        {
            date : 20210830,
            num : 5
        },
        {
            date : 20210905,
            num : 3
        },
        {
            date : 20210914,
            num : 8
        },
        {
            date : 20210925,
            num : 6
        },
        {
            date : 20211001,
            num : 3
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

    // booking time infomations
    const [selectTime, setSelectTime] = useState('');

    const ableTime = ['0800','0900','1000','1100','1200','1400','1500','1600','1700','1800'];
    const disableTime = ['1000','1200','1400','1500','1800'];

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
            bookingsInfo    = {_bookings}
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