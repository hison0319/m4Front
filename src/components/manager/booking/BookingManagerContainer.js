/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager의 예약 확인 (기능)
       API -  - get
*/
import React, { useState, useEffect } from 'react'
import BookingManager from './BookingManager';
import { useSelector, useDispatch } from "react-redux";
import {
    setCalpick2Date,
    addCalpick2Date,
    subCalpick2Date
} from 'modules/calendarPick2ForManager';
import {
    setCalDate
} from 'modules/calendarForManager';

const BookingManagerContainer = React.memo(() => {
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
    
    // Redux Axios bookings info
    const _bookings = [
        {
            date : 20211103,
            num : 5
        },
        {
            date : 20211105,
            num : 3
        },
        {
            date : 20211114,
            num : 8
        },
        {
            date : 20211125,
            num : 6
        },
        {
            date : 20211201,
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
            bookingsInfo    = {_bookings}
            />
        </>
    );
});

export default BookingManagerContainer;