/*
작성자 : 손한이
작성일 : 2021.10.31
내용 :  일반 계정의 프로필(뷰)
       '보기(R)', '수정(M)' 모드
*/
import React from 'react';
import { 
    Container,
    Row,
    Col,
    Button
 } from 'reactstrap';
import ReviewList from 'components/review/ReviewList';
import ModifyProfileContainer from './index/ModifyProfileContainer.js';
import ReadProfile from './index/ReadProfile';
import {
    ModifyIcon,
    BackReadIcon,
} from "components/common/icons/Index"
import PropTypes from "prop-types";

const NormalProfile = ({
    mode,
    handleSetMode,
    id,
    name,
    zipcode,
    city,
    street,
    nationCode,
    contactNumber,
    snsList,
    birth,
    introduce,
}) => {

    const profile = 
    <Container className="pt-2 pb-5">
        <ReadProfile
        id={id}
        name={name}
        zipcode={zipcode}
        city={city}
        street={street}
        nationCode={nationCode}
        contactNumber={contactNumber}
        snsList={snsList}
        birth={birth}
        introduce={introduce}
        />
        <Row>
            <Col>
                <div className="text-center btn-wrapper my-2">
                    <Button
                    className="width_90"
                    color="info"
                    outline
                    type="button"
                    onClick={()=>{handleSetMode("M")}}>
                    <span className="btn-inner--text">
                        <ModifyIcon/>&nbsp;&nbsp;수정하기
                    </span>
                    </Button>
                </div>
            </Col>
        </Row>
        <Row className="py-1 my-1 position-relative">
            <Col className="py-1 my-1">
                <ReviewList/>
            </Col>
        </Row>
    </Container>
    ;

    const modifyProfile = 
    <Container className="pt-2 pb-5">
        <ModifyProfileContainer
        id={id}
        name={name}
        zipcode={zipcode}
        city={city}
        street={street}
        nationCode={nationCode}
        contactNumber={contactNumber}
        snsList={snsList}
        birth={birth}
        introduce={introduce}
        />
        <div className="text-center btn-wrapper px-2">
            <Button
            className="width_90"
            color="info"
            outline
            type="button"
            onClick={()=>{handleSetMode("R")}}>
            <span className="btn-inner--text">
                <BackReadIcon/>&nbsp;&nbsp;보기
            </span>
            </Button>
        </div>
    </Container>
    ;
    return (
        <>
            {
            mode==="R"?
            profile:
            modifyProfile
            }
        </>
    );
}

NormalProfile.propTypes = {
    mode: PropTypes.oneOf(['M', 'R']).isRequired,
    handleSetMode: PropTypes.func.isRequired,
    id: PropTypes.number,
    name: PropTypes.string,
    zipcode: PropTypes.string,
    city: PropTypes.string,
    street: PropTypes.string,
    nationCode: PropTypes.number,
    contactNumber: PropTypes.string,
    snsList: PropTypes.array,
    birth: PropTypes.string,
    introduce: PropTypes.string,
};

export default NormalProfile;