import React from "react";
import {
    Container,
    Row,
    Col,
    Input,
    Button
} from "reactstrap"


const Signup = () => {
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
                    <Input
                    type="text"
                    name="businessNumber"
                    id="businessNumber"
                    placeholder="사업자번호"
                    maxLength={20}
                    // value={varCity||''}
                    // onChange={onChangeText}
                    />
                </Col>
            </Row>
            <Row>
                <Col className="my-2">
                    <Input
                    type="text"
                    name="businessName"
                    id="businessName"
                    placeholder="상호명"
                    maxLength={20}
                    // value={varCity||''}
                    // onChange={onChangeText}
                    />
                </Col>
            </Row>
            <Row>
                <Col className="my-2">
                    <Input
                    type="text"
                    name="contactNumber"
                    id="contactNumber"
                    placeholder="연락처"
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
                        회원가입하기
                    </span>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;