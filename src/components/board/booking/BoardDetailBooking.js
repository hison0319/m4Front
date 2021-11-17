import React, { useEffect } from 'react';
import {
    Row,
    Col,
    Button
} from 'reactstrap';

import CalenderPick2 from "components/common/calendar/CalenderPick2"
import Calender from "components/common/calendar/Calender"
import SelectTime from "./index/SelectTime"
import SelectOptions from "./index/SelectOptions"
import CheckOptions from "./index/CheckOptions"

import {
    SubmitIcon
} from "components/common/icons/Index"

const BoardDetailBooking = React.memo((props) => {
    useEffect(() => {
        // console.log('BoardDetailBooking is rendering!')
    })

    // For CalenderPick2
    const localDate = props.localDate;
    const onPreCal  = props.onPreCal;
    const onPickCal = props.onPickCal;
    const onNextCal = props.onNextCal;

    // For Calender
    const calendarInfo = props.calendarInfo;
    const bookingsInfo = props.bookingsInfo;

    // For SelectTime
    const ableTime        = props.ableTime;
    const disableTime     = props.disableTime;
    const selectTime      = props.selectTime;
    const onSelectTime    = props.onSelectTime;

    // For SelectOption
    const optionSingle    = props.optionSingle;

    // For CheckOption
    const optionMultiple  = props.optionMultiple;

    return (
        <Row>
            <Col>
                <Row>
                    <Col className="pt-4">
                        <CalenderPick2
                        localDate = {localDate}
                        onPreCal  = {onPreCal}
                        onPickCal = {onPickCal}
                        onNextCal = {onNextCal}/>
                    </Col>
                </Row>
                <Row>
                    <Col className="pb-3">
                        <Calender
                        calendarInfo = {calendarInfo}
                        bookingsInfo = {bookingsInfo}
                        onPickCal    = {onPickCal}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="my-2 px-4">
                        <SelectTime
                        ableTime        = {ableTime}
                        disableTime     = {disableTime}
                        selectTime      = {selectTime}
                        onSelectTime    = {onSelectTime}/>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="my-2 px-4">
                        <SelectOptions
                        optionSingle    = {optionSingle}/>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="my-2 px-4">
                        <CheckOptions
                        optionMultiple  = {optionMultiple}/>
                    </div>
                    </Col>
                </Row>
                <Row className="px-4">
                    <Col xs="12">
                        <div className="text-right">
                            2021-08-16 월요일 14:00 ~ 15:30
                        </div>
                    </Col>
                </Row>
                <Row className="px-4">
                    <Col xs="12">
                        <div className="text-right">
                            총 요금 : 3,500 ¥
                        </div>
                    </Col>
                </Row>
                <Row className="px-4">
                    <Col>
                    <div className="text-center btn-wrapper my-2">
                        <Button
                        className="width_100"
                        color="success"
                        outline
                        type="button"
                        onClick={()=>{
                            
                        }}>
                        <span className="btn-inner--text">
                            <SubmitIcon/>&nbsp;&nbsp;제출하기
                        </span>
                        </Button>
                    </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
});

export default BoardDetailBooking;