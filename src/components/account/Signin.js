import React from "react";
import {
    Container,
    Row,
    Col,
    Input,
    Button
} from "reactstrap"

const Signin = () => {
    return (
        <Container>
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
                            // value={varCity||''}
                            // onChange={onChangeText}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="my-4">
                <Col>
                    <Row>
                        <Col>
                            <small>비밀번호</small>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder=""
                            maxLength={20}
                            // value={varCity||''}
                            // onChange={onChangeText}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="pt-3 my-5">
                <Col>
                    <div className="text-center btn-wrapper">
                        <Button
                        className="sub_button1 color2"
                        color="info"
                        outline
                        type="button"
                        onClick={()=>{
                        }}>
                        <span className="btn-inner--text">
                            로그인
                        </span>
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row className="my-5">
                <Col>
                    <div className="text-center btn-wrapper">
                        <Button
                        className="sub_button1 color1"
                        color="info"
                        outline
                        type="button"
                        onClick={()=>{
                        }}>
                        <span className="btn-inner--text">
                            이메일을 잊었습니다.
                        </span>
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row className="my-5">
                <Col>
                    <div className="text-center btn-wrapper">
                        <Button
                        className="sub_button1 color1"
                        color="info"
                        outline
                        type="button"
                        onClick={()=>{
                        }}>
                        <span className="btn-inner--text">
                            비밀번호를 잊었습니다.
                        </span>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );

}

export default Signin