/*
작성자 : 손한이
작성일 : 2021.12.07
내용 :  Review (뷰)
*/
import React, { useState } from 'react';
import { 
    Container,
    Card,
    CardBody,
    Button,
} from 'reactstrap';
import {
    HeartIcon,
    HeartBrokenIcon
} from 'components/common/icons/index';
import PropTypes from "prop-types";

const Review = ({
    name,
    rating,
    comment,
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
            <div className="my-1 py-1">
                <Container>
                    <div>
                    <span className="text-info mr-2">{name}</span>
                    <span>
                        {makeHeartArr(Number(rating)).map((icon,idx) => 
                            <span key={idx}>{icon}</span>
                        )}
                    </span>
                    </div>
                    <Card className="shadow">
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
                </Container>
            </div>
        </>
    );
}

Review.propTypes = {
    name: PropTypes.string,
    rating: PropTypes.string,
    comment: PropTypes.string,
}

export default Review;