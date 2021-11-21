/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager(Collapse 뷰)
*/
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Collapse,
    Button
} from 'reactstrap';
import {
    ListDownIcon,
    ListUpIcon,
    ManageChkBoardIcon,
    ManageChkBookIcon,
    ManageDashIcon,
    BackReadIcon,
} from "components/common/icons/Index"

import BoardManager from 'components/manager/board/BoardManager';
// import BookingManager from 'components/manager/booking/BookingManager';
import BookingManagerContainer from 'components/manager/booking/BookingManagerContainer';
import Dashboard from 'components/manager/dashboard/Dashboard';

function Manager(){
    const [boardOpen, setBoardOpen] = useState(true);
    const toggleBoard = () => setBoardOpen(!boardOpen);

    const [bookOpen, setBookOpen] = useState(false);
    const toggleBook = () => setBookOpen(!bookOpen);

    const [dashOpen, setDashOpen] = useState(false);
    const toggleDash = () => setDashOpen(!dashOpen);

    const downIcon = <span className="ml-2"><ListDownIcon/></span>;
    const upIcon = <span className="ml-2"><ListUpIcon/></span>;

    const link = "/";

    return (
        <>
            <Container>
                {/* <Row>
                    <Col>
                        <Link to={link} className="default-link">
                            <div className="text-left btn-wrapper">
                                <Button
                                className="text-left"
                                color="netural"
                                outline
                                type="button"
                                onClick={()=>{
                                }}>
                                <span className="btn-inner--text">
                                    <BackReadIcon/>&nbsp;&nbsp;돌아가기
                                </span>
                                </Button>
                            </div>
                        </Link>
                    </Col>
                </Row> */}
                <Row className="pt-2 pb-5">
                    <Col>
                        <Row className="py-3 my-3">
                            <Col>
                                <Link
                                className="h5 text-secondary default-link"
                                onClick={(e) => {
                                        e.preventDefault();
                                        toggleBoard();
                                    }
                                }
                                to=""
                                >
                                    <ManageChkBoardIcon/>
                                    &nbsp;&nbsp;게시물 관리
                                    {boardOpen?upIcon:downIcon}
                                </Link>
                                <Collapse isOpen={boardOpen}>
                                    <BoardManager/>
                                </Collapse>
                            </Col>
                        </Row>
                        <hr></hr>
                        <Row className="mt-5 py-3 my-3">
                            <Col>
                                <Link
                                className="h5 text-secondary default-link"
                                onClick={(e) => {
                                        e.preventDefault();
                                        toggleBook();
                                    }
                                }
                                to=""
                                >
                                    <ManageChkBookIcon/>
                                    &nbsp;&nbsp;예약 관리
                                    {bookOpen?upIcon:downIcon}
                                </Link>
                                <Collapse isOpen={bookOpen}>
                                    <div className="btn-wrapper mt-5">
                                        <BookingManagerContainer/>
                                    </div>
                                </Collapse>
                            </Col>
                        </Row>
                        <hr></hr>
                        <Row className="mt-5 py-3 my-3">
                            <Col>
                                <Link
                                className="h5 text-secondary default-link"
                                onClick={(e) => {
                                        e.preventDefault();
                                        toggleDash();
                                    }
                                }
                                to=""
                                >
                                    <ManageDashIcon/>
                                    &nbsp;&nbsp;대시보드
                                    {dashOpen?upIcon:downIcon}
                                </Link>
                                <Collapse isOpen={dashOpen}>
                                    <div className="btn-wrapper">
                                        <Dashboard/>
                                    </div>
                                </Collapse>
                            </Col>
                        </Row>
                        <hr></hr>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Manager;