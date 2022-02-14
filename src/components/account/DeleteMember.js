/*
작성자 : 손한이
작성일 : 2022.02.06
내용 :  계정 삭제 - 관리자용 화면 (기능, 뷰)
*/
import React, { useState, useRef, useEffect, useContext } from "react";
import {
    Container,
    Row,
    Col,
    Input,
    Button
} from "reactstrap"
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"

async function deleteMember(type, email) {
    console.log(type);
    console.log(email)
    const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}admin/member/${type}/${email}`,
    );
    return response.data;
}

const DeleteMember = () => {
    const [email, setEmail] = useState();
    const [memberType, setMemberType] = useState("business");

    // 비지니스 계정 등록
    const {spinner} = useContext(ProgressContext);
    const [state, refetch] = useAsync(() => deleteMember(
        memberType, email
    ), [], true);
    
    const onRefetch = () => {
        refetch();
    }

    useEffect(()=>{
        const { loading, data: member, error } = state;
        if(member) {
            console.log(member);
            alert("삭제 성공");
        } else if(error) {
            alert("삭제 실패");
        }
        if(loading) {
            spinner.start();
        } else {
            spinner.stop();
        }
    });

    return (
        <Container className="my-5">
            <Row className="my-4">
                <Col>
                    <Row>
                        <Col>
                            <small>이메일</small>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                            type="text"
                            name="email"
                            id="email"
                            placeholder=""
                            maxLength={100}
                            value={email||''}
                            onChange={(e)=>{
                                setEmail(e.target.value);
                            }}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="my-4">
                <Col>
                    <Row>
                        <Col>
                            <small>타입</small>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                            type="select"
                            name="type"
                            value={memberType}
                            onChange={(e)=>{
                                console.log(e.target.value);
                                setMemberType(e.target.value);
                            }}>
                                <option value="business">사업자계정</option>
                                <option value="personal">일발계정</option>
                            </Input>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="pt-3 my-3">
                <Col className="mt-4">
                    <div className="text-center btn-wrapper">
                        <Button
                        className="sub_button1 width_100 color_4 border_color_4"
                        color="none"
                        onClick={()=>{onRefetch()}}>
                        <span>
                            삭제
                        </span>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );

}

export default DeleteMember;