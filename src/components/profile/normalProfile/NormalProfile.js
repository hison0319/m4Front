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
import ReviewListContainer from 'components/review/ReviewListContainer';
import ModifyProfileContainer from './index/ModifyProfileContainer.js';
import ReadProfile from './index/ReadProfile';
import PropTypes from "prop-types";

const NormalProfile = ({
    mode,
    handleSetMode,
    userId,
    name,
    zipcode,
    city,
    street,
    // nationCode,
    contactNumber,
    snsList,
    birth,
    introduce,
    imageURL,
    //for review
    reviewId
}) => {

    const profile = 
    <>
        <Container className="pt-2 mb-2 pb-5">
            <ReadProfile
            userId={userId}
            name={name}
            zipcode={zipcode}
            city={city}
            street={street}
            // nationCode={nationCode}
            contactNumber={contactNumber}
            snsList={snsList}
            birth={birth}
            introduce={introduce}
            imageURL={imageURL}
            />
            <Row>
                <Col>
                    <div className="text-center btn-wrapper my-2">
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
        <ReviewListContainer
        userId={userId}
        reviewId={reviewId}/>
        </Container>
    </>
    ;

    const modifyProfile = 
    <>
        <Container className="pt-2 pb-5">
            <ModifyProfileContainer
            userId={userId}
            name={name}
            zipcode={zipcode}
            city={city}
            street={street}
            // nationCode={nationCode}
            contactNumber={contactNumber}
            snsList={snsList}
            birth={birth}
            introduce={introduce}
            handleSetMode={handleSetMode}
            imageURL={imageURL}
            />
        </Container>
    </>
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
    userId: PropTypes.string,
    name: PropTypes.string,
    zipcode: PropTypes.string,
    city: PropTypes.string,
    street: PropTypes.string,
    // nationCode: PropTypes.number,
    contactNumber: PropTypes.string,
    snsList: PropTypes.array,
    birth: PropTypes.string,
    introduce: PropTypes.string,
    imageURL: PropTypes.string,
    reviewId: PropTypes.string,
};

export default NormalProfile;