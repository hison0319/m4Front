/*
작성자 : 손한이
작성일 : 2021.12.07
내용 :  Review (뷰)
*/
import React, { useState } from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    Button,
} from 'reactstrap';
import {
    HeartIcon,
    HeartBrokenIcon
} from 'components/common/icons/Index';
import PropTypes from "prop-types";

const Review = ({
    userId,
    name,
    rating,
    comment,
    onModal,
}) => {
    const [readToggle, setReadToggle] = useState(false);

    const makeHeartArr = (num) => {
        let heartArr = [];
        let i = 0;
        for (i; i<num; i++) {
            heartArr.push(<HeartIcon id={i}/>);
        }
        for (i; i<5; i++) {
            heartArr.push(<HeartBrokenIcon id={i}/>);
        }
        return heartArr;
    };

    return (
        <>
            <Row className="my-1">
                <Col>
                    <Row>
                        <Col>
                            <Button
                                className="btn-1"
                                color="neutral"
                                onClick={()=>{onModal(userId);}}>
                                <small>
                                    {name}&nbsp;님
                                </small>
                            </Button>
                            <small className="pt-1">
                                {makeHeartArr(Number(rating)).map((icon,idx) => 
                                    <span key={idx}>{icon}</span>
                                    )}
                            </small>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Card>
                            <CardBody className="px-1 py-1">
                                    <Button
                                    color="link default-link">
                                        <article
                                        className="text-secondary text-justify txt_review"
                                        style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}
                                        onClick={function(e) {
                                            setReadToggle(!readToggle);
                                            if(readToggle) {
                                                e.target.classList.add('txt_review');
                                            } else {
                                                e.target.classList.remove('txt_review');
                                            }
                                        }}>
                                        {comment}
                                        </article>
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

Review.propTypes = {
    userId: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.string,
    comment: PropTypes.string,
    onModal: PropTypes.func,
}

export default Review;