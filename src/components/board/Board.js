/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  board cardView (뷰)
*/
import React from 'react';
import { Link } from "react-router-dom";
import { 
    Container,
    Row,
    Col,
    Card,
    CardBody,
 } from 'reactstrap';
import ImgBox from 'components/common/imagebox/ImgBox';
import {
    getDotStrMax
} from 'utils/common'
import PropTypes from "prop-types";

const Board = ({
    imageItemList,
    shopName,
    context,
}) => {
    const link = "/detail";
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col className="mt-3">
                        <div>
                            <Card className="shadow">
                                <CardBody>
                                    <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
                                        <ImgBox
                                        item={imageItemList}/>
                                    </span>
                                    <br></br>
                                    <Link to={link} target="_blank" id="tooltipA0002" className="default-link">
                                        <span className="d-block pb-4 h2 text-dark border-bottom border-gray">{shopName}</span>

                                        <article className="pt-5 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
                                            {getDotStrMax(context,100)}
                                        </article>
                                    </Link>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

Board.propTypes = {
    imageItemList: PropTypes.array,
    shopName: PropTypes.string,
    context: PropTypes.string,
};

export default Board;