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

function Board(){
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
                                        <ImgBox/>
                                    </span>
                                    <br></br>
                                    <Link to={link} target="_blank" id="tooltipA0002" className="default-link">
                                        <span className="d-block pb-4 h2 text-dark border-bottom border-gray">한이 스튜디오</span>

                                        <article className="pt-5 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
                                            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 
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

export default Board;