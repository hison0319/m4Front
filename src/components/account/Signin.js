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
        <Container className="my-5">
            <Row className="my-4">
                <Col className="my-3">
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
                <Col className="my-3">
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
                <Col className="mt-4">
                    <div className="text-center btn-wrapper">
                        <Button
                        className="sub_button1 color_4 border_color_4"
                        color="none"
                        onClick={()=>{
                        }}>
                        <span>
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
                        className="sub_button1 color_2 border_color_2"
                        color="none"
                        onClick={()=>{
                        }}>
                        <span>
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
                        className="sub_button1 color_2 border_color_2"
                        color="none"
                        onClick={()=>{
                        }}>
                        <span>
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