import React, {useState} from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import ImgBox from 'components/common/imagebox/ImgBox';
import ReviewList from 'components/review/ReviewList';
import BoardDetailBookingContainer from './booking/BoardDetailBookingContainer';
import {
    BookingIcon,
    BackReadIcon
} from "components/common/icons/Index"

function BoardDetail(){
    const [mode, setMode] = useState("R");

    const modeR = 
        <Row className="pb-5">
            <Col>
                <Row className="py-1 my-1 px-4">
                    <Col className="py-1 my-1">
                        <ImgBox/>
                        <br></br>
                        <span className="d-block pb-4 h2 text-dark border-bottom border-gray">한이 스튜디오</span>

                        <article className="pt-5 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
                        내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 
                        내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 
                        내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 
                        내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 
                        내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 
                        내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 
                        내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 
                        내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 
                        내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. </article>
                        <Button
                            className="mt-2 width_100"
                            color="neutral"
                            href="https://www.instagram.com/his0319"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="btn-inner--icon">
                            <small className="text-center text-secondary">https://www.instagram.com/his0319</small>
                            </span>
                        </Button>
                        <Button
                            className="mt-2 width_100"
                            color="neutral"
                            href="https://www.instagram.com/his0319"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="btn-inner--icon">
                            <small className="text-center text-secondary">https://www.facebook.com/his0319</small>
                            </span>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="text-center btn-wrapper mt-4">
                            <Button
                            className="width_90"
                            color="success"
                            outline
                            type="button"
                            onClick={()=>{
                                setMode("B");
                            }}>
                            <span className="btn-inner--text">
                            <BookingIcon/>&nbsp;&nbsp;지금 예약하기
                            </span>
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row className="py-1 my-1 position-relative">
                    <Col className="py-1 my-1">
                        <ReviewList></ReviewList>
                    </Col>
                </Row>
            </Col>
        </Row>;

    const modeB = 
    <Row className="pb-5">
        <Col>
            <Row className="py-2 px-4">
                <Col>
                <div className="text-left btn-wrapper my-2">
                    <Button
                    className="width_100 text-left"
                    color="netural"
                    outline
                    type="button"
                    onClick={()=>{
                        setMode("R");
                    }}>
                    <span className="btn-inner--text">
                        <BackReadIcon/>&nbsp;&nbsp;돌아가기
                    </span>
                    </Button>
                </div>
                </Col>
            </Row>
            <BoardDetailBookingContainer/>
            </Col>
        </Row>;
    return (
        <>
            <Container>
                {
                mode==="R"?
                modeR:
                modeB
                }
            </Container>
        </>
    );
}

export default BoardDetail;