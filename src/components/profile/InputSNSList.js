/*
작성자 : 손한이
작성일 : 2021.10.31
내용 :  프로필의 sns input List
*/
import React, { useRef, useState } from "react";
import {
    Row,
    Col,
    Input,
} from "reactstrap";
import AlertModal from 'components/common/alert/AlertModal';
import {
    modifyArrayWithIdx,
    delNullStrArray,
    validateURL,
} from "utils/common";
import PropTypes from "prop-types";

const InputSNSList = ({
    snsList,
    setSnsList,
}) => {
    const alertRef = useRef();

    const [localSnsList, setLocalSnsList] = useState(
        snsList?
        snsList.concat([""]):
        [""]
    );

    const onSetInputSnsList = (idx, sns) => {
        const newSnsList = delNullStrArray(modifyArrayWithIdx(localSnsList,idx,sns,""));
        setLocalSnsList(newSnsList.concat([""]));
        setSnsList(newSnsList);
    }

    return (
        <>
            <Row className="my-2">
                <Col>
                    <Row>
                        <Col>
                            <small>SNS 주소</small>
                        </Col>
                    </Row>
                    {localSnsList.map((sns, idx) =>
                    <Row key={"sns"+idx} className="my-4">
                        <Col>
                            <Input
                            type="text"
                            name={"sns"+idx}
                            id={"sns"+idx}
                            placeholder="sns 주소"
                            maxLength={200}
                            value={sns}
                            onChange={(e)=>{onSetInputSnsList(idx, e.target.value)}}
                            onBlur={(e)=>{
                                if(e.target.value) {
                                    if(!validateURL(e.target.value)) {
                                        alertRef.current.showAlert();
                                        onSetInputSnsList(idx,"");
                                    }
                                }
                            }}
                            />
                        </Col>
                    </Row>
                    )}
                </Col>
            </Row>
            <AlertModal
            ref={alertRef}
            comment="SNS 전체 주소를 넣어주세요. 예)https://www.instagram.com/his0319"
            onSaveClick={()=>{
            //nothing
            }}
            />
        </>
    )
}

InputSNSList.propTypes = {
    snsList: PropTypes.array,
    setSnsList: PropTypes.func,
};

export default InputSNSList;