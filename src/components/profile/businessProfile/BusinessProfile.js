/*
작성자 : 손한이
작성일 : 2021.10.25
내용 :  비지니스 계정의 프로필(뷰)
       '보기(R)', '수정(M)' 모드
*/

import React from 'react';
import { 
    Container,
    Row,
    Col,
    Button
 } from 'reactstrap';
import ModifyProfileContainer from './index/ModifyProfileContainer.js';
import ReadProfile from './index/ReadProfile';
import PropTypes from "prop-types";

const BusinessProfile = ({
    mode,
    handleSetMode,
    shopId,
    businessRegNumber,
    name,
    city,
    street,
    nationCode1,
    nationCode2,
    contactNumber1,
    contactNumber2,
    snsList,
    zipcode,
    openingHours,
    introduce,
    imageURL,
}) => {

    const profile = 
    <Container className="py-4">
        <ReadProfile
        shopId={shopId}
        businessRegNumber={businessRegNumber}
        name={name}
        city={city}
        street={street}
        nationCode1={nationCode1}
        nationCode2={nationCode2}
        contactNumber1={contactNumber1}
        contactNumber2={contactNumber2}
        snsList={snsList}
        zipcode={zipcode}
        openingHours={openingHours}
        introduce={introduce}
        imageURL={imageURL}
        />
        <Row>
            <Col>
                <div className="text-center btn-wrapper mt-3">
                    <Button
                    className="width_100 sub_button2 color_2 border_color_2"
                    outline
                    type="button"
                    onClick={()=>{handleSetMode("M")}}>
                    <span className="btn-inner--text">
                        수정하기
                    </span>
                    </Button>
                </div>
            </Col>
        </Row>
    </Container>
    ;

    const modifyProfile = 
    <Container className="pt-2 pb-5">
        <ModifyProfileContainer
        shopId={shopId}
        businessRegNumber={businessRegNumber}
        name={name}
        city={city}
        street={street}
        nationCode1={nationCode1}
        nationCode2={nationCode2}
        contactNumber1={contactNumber1}
        contactNumber2={contactNumber2}
        snsList={snsList}
        zipcode={zipcode}
        openingHours={openingHours}
        introduce={introduce}
        handleSetMode={handleSetMode}
        imageURL={imageURL}
        />
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

BusinessProfile.propTypes = {
    mode: PropTypes.oneOf(['M', 'R']).isRequired,
    handleSetMode: PropTypes.func.isRequired,
    link: PropTypes.string.isRequired,

    shopId: PropTypes.string,
    businessRegNumber: PropTypes.string,
    name: PropTypes.string,
    city: PropTypes.string,
    street: PropTypes.string,
    nationCode1: PropTypes.number,
    nationCode2: PropTypes.number,
    contactNumber1: PropTypes.string,
    contactNumber2: PropTypes.string,
    snsList: PropTypes.array,
    zipcode: PropTypes.string,
    openingHours: PropTypes.string,
    introduce: PropTypes.string,
    imageURL: PropTypes.string,
};

export default BusinessProfile;