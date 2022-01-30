/*
작성자 : 손한이
작성일 : 2021.12.02
내용 :  shop manager의 Dashboard chart (기능)
*/
import React, { useState, useEffect, useContext } from 'react'
import Charts from './Charts';
import moment from "moment";
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"

// 예약 내역 차트 get
async function getBookingChart(id, period) {
    const response = await axios.get(
      `/api/v1/shopBookingChart/${id}${period}`
    );
    return response.data;
}
// 노쇼 내역 차트 get
async function getNoshowChart(id, period) {
    const response = await axios.get(
      `/api/v1/shopNoshowChart/${id}${period}`
    );
    return response.data;
}

const ChartsContainer = React.memo(() => {
    useEffect(() => {
        // console.log('DashboardContainer is rendering!')
    })

    // common function
    const setPeriod = (selectPeriod) => {
        let period = 1;
        // 기간 => 1주일, 한달(30일), 90일, 1년(365일)
        if(selectPeriod === "PA") {
            period = 7;
        } else if(selectPeriod === "PB") {
            period = 30;
        } else if(selectPeriod === "PC") {
            period = 90;
        } else if(selectPeriod === "PD") {
            period = 365;
        }
        let date2 = moment().format('YYYY-MM-DD');
        let date1 = moment(date2, 'YYYY-MM-DD').subtract(period,'days').format('YYYY-MM-DD');

        return {date1,date2}
    }

    //number of reservations
    const [rsvSelectP, setRsvSelectP] = useState("PA");
    const rsvSPOnChange = (optionVal) => {
        setRsvSelectP(optionVal);
    }
    const rsvPeriod = setPeriod(rsvSelectP);
    
    //number of no show
    const [nsSelectP, setNsSelectP] = useState("PB");
    const nsSPOnChange = (optionVal) => {
        setNsSelectP(optionVal);
    }
    const nsPeriod = setPeriod(nsSelectP);

    const bookingChartForTest = {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        label: "한주간 고생했어!",
        data: [65, 59, 80, 81, 56, 55, 93],
        backgroundColor: 'rgba(7,104,159,0.4)',
        borderColor: 'rgba(7,104,159,1)',
        total: 643,
    }
    const noshowChartForTest = {
        labels: ['30일전','27일전','24일전','21일전','18일전','15일전','12일전','9일전','6일전','3일전'],
        label: "한달간 고생했어!",
        data: [6, 4, 9, 3, 4, 2, 0, 1, 2, 0],
        backgroundColor: 'rgba(252,126,103,0.4)',
        borderColor: 'rgba(252,126,103,1)',
        total: 30,
    }

    // 차트 내역 get api
    const {spinner} = useContext(ProgressContext);
    const _id = 1; //temporary
    const [stateB] = useAsync(() => getBookingChart(_id, rsvPeriod), [_id], false);
    const { loadingB, data: bookingChart, errorB } = stateB;
    const [stateN] = useAsync(() => getNoshowChart(_id, nsPeriod), [_id], false);
    const { loadingN, data: noshowChart, errorN } = stateN;

    useEffect(() => {
        // if(bookingChart) {}
        if(loadingB) {
            spinner.start();
        } else {
            spinner.stop();
        }
        if(errorB) {
        // window.location.href = '/error/100';
        }
    },[loadingB, errorB, spinner, bookingChart]);
    useEffect(() => {
        // if(noshowChart) {}
        if(loadingN) {
            spinner.start();
        } else {
            spinner.stop();
        }
        if(errorN) {
        // window.location.href = '/error/100';
        }
    },[loadingN, errorN, spinner, noshowChart]);

    

    return (
        <>
            <Charts
            //number of reservations
            rsvSelectP = {rsvSelectP}
            rsvSPOnChange = {rsvSPOnChange}
            rsvDate2 = {rsvPeriod.date2}
            rsvDate1 = {rsvPeriod.date1}
            rsvTotal = {bookingChartForTest.total}
            
            //number of no show
            nsSelectP = {nsSelectP}
            nsSPOnChange = {nsSPOnChange}
            nsDate2 = {nsPeriod.date2}
            nsDate1 = {nsPeriod.date1}
            nsTotal = {noshowChartForTest.total}

            //Chart
            bookingChart={bookingChartForTest}
            noshowChart={noshowChartForTest}
            />
        </>
    );
});

export default ChartsContainer;