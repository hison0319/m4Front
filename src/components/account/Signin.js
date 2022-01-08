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
            <Row>
                <Col className="my-2">
                    <Input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="이메일"
                    maxLength={100}
                    // value={varCity||''}
                    // onChange={onChangeText}
                    />
                </Col>
            </Row>
            <Row>
                <Col className="my-2">
                    <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="비밀번호"
                    maxLength={20}
                    // value={varCity||''}
                    // onChange={onChangeText}
                    />
                </Col>
            </Row>
            <Row>
                <Col className="my-2">
                    <Button
                    className="width_100"
                    color="info"
                    outline
                    type="button"
                    onClick={()=>{
                    }}>
                    <span className="btn-inner--text">
                        로그인
                    </span>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col className="my-2">
                    <Button
                    className="width_100"
                    color="info"
                    outline
                    type="button"
                    onClick={()=>{
                    }}>
                    <span className="btn-inner--text">
                        이메일을 잊었습니다.
                    </span>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col className="my-2">
                    <Button
                    className="width_100"
                    color="info"
                    outline
                    type="button"
                    onClick={()=>{
                    }}>
                    <span className="btn-inner--text">
                        비밀번호를 잊었습니다.
                    </span>
                    </Button>
                </Col>
            </Row>
        </Container>
    );

}

export default Signin