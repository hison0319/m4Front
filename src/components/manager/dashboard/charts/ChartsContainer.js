import React, { useState, useEffect } from 'react'
import Charts from './Charts';
import moment from "moment";

const ChartsContainer = React.memo(() => {
    useEffect(() => {
        // console.log('DashboardContainer is rendering!')
    })

    // common function
    const setPeriod = (selectPeriod, selectCondition) => {
        let period = 1;
        if(selectPeriod === "PA") {
            period = 7;
        } else if(selectPeriod === "PB") {
            period = 31;
        } else if(selectPeriod === "PC") {
            period = 90;
        }
        
        let greenDate2 = moment().format('YYYY-MM-DD');
        let greenDate1 = moment(greenDate2, 'YYYY-MM-DD').subtract(period,'days').format('YYYY-MM-DD');
        let redDate2;
        let redDate1;
        if(selectCondition === "CA") {
            redDate2 = moment(greenDate1, 'YYYY-MM-DD').subtract(1,'days').format('YYYY-MM-DD');
            redDate1 = moment(redDate2, 'YYYY-MM-DD').subtract(period,'days').format('YYYY-MM-DD');
        } else if(selectCondition === "CB") {
            if(selectPeriod === "PA") {
                redDate2 = moment(greenDate2, 'YYYY-MM-DD').subtract(1,'months').format('YYYY-MM-DD');
                redDate1 = moment(greenDate1, 'YYYY-MM-DD').subtract(1,'months').format('YYYY-MM-DD');
            } else {
                redDate2 = moment(greenDate2, 'YYYY-MM-DD').subtract(1,'years').format('YYYY-MM-DD');
                redDate1 = moment(greenDate1, 'YYYY-MM-DD').subtract(1,'years').format('YYYY-MM-DD');
            }
        }

        return {greenDate1,greenDate2,redDate1,redDate2}
    }

    //number of reservations
    const [rsvSelectP, setRsvSelectP] = useState("PA");
    const [rsvSelectC, setRsvSelectC] = useState("CA");
    
    const rsvSPOnChange = (optionVal) => {
        setRsvSelectP(optionVal);
    }
    const rsvSCOnChange = (optionVal) => {
        setRsvSelectC(optionVal);
    }

    const rsvPeriod = setPeriod(rsvSelectP, rsvSelectC);
    
    //number of no show
    const [nsSelectP, setNsSelectP] = useState("PA");
    const [nsSelectC, setNsSelectC] = useState("CA");
    
    const nsSPOnChange = (optionVal) => {
        setNsSelectP(optionVal);
    }
    const nsSCOnChange = (optionVal) => {
        setNsSelectC(optionVal);
    }
    
    const nsPeriod = setPeriod(nsSelectP, nsSelectC);
    
    return (
        <>
            <Charts
            //number of reservations
            rsvSelectP = {rsvSelectP}
            rsvSelectC = {rsvSelectC}
            rsvSPOnChange = {rsvSPOnChange}
            rsvSCOnChange = {rsvSCOnChange}
            rsvGreenDate2 = {rsvPeriod.greenDate2}
            rsvGreenDate1 = {rsvPeriod.greenDate1}
            rsvRedDate2 = {rsvPeriod.redDate2}
            rsvRedDate1 = {rsvPeriod.redDate1}
            
            //number of no show
            nsSelectP = {nsSelectP}
            nsSelectC = {nsSelectC}
            nsSPOnChange = {nsSPOnChange}
            nsSCOnChange = {nsSCOnChange}
            nsGreenDate2 = {nsPeriod.greenDate2}
            nsGreenDate1 = {nsPeriod.greenDate1}
            nsRedDate2 = {nsPeriod.redDate2}
            nsRedDate1 = {nsPeriod.redDate1}
            />
        </>
    );
});

export default ChartsContainer;