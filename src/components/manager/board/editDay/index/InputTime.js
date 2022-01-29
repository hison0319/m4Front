/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager의 수정 - Opening Hour 옵션 수정 - Opening Hour 수정 - start~end Time
       시작시간, 종료시간, 
       select option의 범위를 위해 startTimeRange, endTimeRange를 props로 받음.
*/
import React from 'react';
import {
    Button,
    Row,
    Col,
    Input,
    InputGroup,
// InputGroupAddon,
} from "reactstrap";
import {
    RemoveOptionIcon
} from "components/common/icons/Index";
import PropTypes from "prop-types";

const InputTime = ({
    idx,
    onRemove,
    startTime,
    endTime,
    onSetStartTime,
    onSetEndTime,
    startTimeRange,
    endTimeRange,
}) => {
    const onRemoveClick = () => {
        onRemove(idx);
    }
    
    let timeRange1 = [];
    let timeRange2 = [];
    let timeTemp = "";
    let keyTemp = "";

    for(let i=startTimeRange; i<24; i++) {
        timeTemp = String(i).length===1?"0"+String(i):String(i);
        keyTemp = "timeRange1"+i;
        timeRange1.push({key:keyTemp, value:i, time:timeTemp});
    }
    for(let i=endTimeRange; i<=24; i++) {
        timeTemp = String(i).length===1?"0"+String(i):String(i);
        keyTemp = "timeRange2"+i;
        timeRange2.push({key:keyTemp, value:i, time:timeTemp});
    }
    
    const onChangeStartTime = (time) => {
        onSetStartTime(idx,time);
    }
    const onChangeEndTime = (time) => {
        onSetEndTime(idx,time);
    }

    return(
        <>
            <Row>
                <Col xs="1" className="text-right btn-wrapper">
                    <Button
                        className="btn-icon-only rounded-circle pt-2 pl-1"
                        // size="sm"
                        color="neutral"
                        onClick={onRemoveClick}
                    >
                        <small className="btn-inner--icon text-secondary">
                        <RemoveOptionIcon/>
                        </small>
                    </Button>
                </Col>
                <Col xs="5">
                    <InputGroup className="my-1 py-0">
                        <Input
                        type="select"
                        name="selectTime1"
                        value={startTime}
                        onChange={(e)=>{
                            onChangeStartTime(e.target.value);
                        }}>
                        {timeRange1.map((item) => 
                            <option key={item.key} value={item.value}>{item.time}:00</option>
                        )}
                        </Input>
                    </InputGroup>
                </Col>
                <Col xs="1" className="text-center pt-1">~</Col>
                <Col xs="5">
                    <InputGroup className="my-1 py-0">
                        <Input
                        type="select"
                        name="selectTime2"
                        value={endTime}
                        onChange={(e)=>{
                            onChangeEndTime(e.target.value);
                        }}>
                        {timeRange2.map((item) => 
                            <option key={item.key} value={item.value}>{item.time}:00</option>
                        )}
                        </Input>
                    </InputGroup>
                </Col>
            </Row>
            {/* 오픈 시간별 가격책정은 사용하지 않음 */}
            {/* <Row className="mb-2">
                <Col xs="12" >
                    <InputGroup className="text-right my-1 py-0">
                        <InputGroupAddon addonType="prepend">¥</InputGroupAddon>
                        <Input placeholder="가격" min={0} max={100000} type="number" step="1" />
                    </InputGroup>
                </Col>
            </Row> */}
        </>
    );
}

InputTime.propTypes = {
    idx: PropTypes.number,
    onRemove: PropTypes.func,
    startTime: PropTypes.number,
    endTime: PropTypes.number,
    onSetStartTime: PropTypes.func,
    onSetEndTime: PropTypes.func,
    startTimeRange: PropTypes.number,
    endTimeRange: PropTypes.number,
};

export default InputTime;