import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Input,
    Button,
    Progress
} from "reactstrap"

const Signup = () => {
    const step1 = 
    <Container className="mt-5">
        <Row className="mb-4 pb-5">
            <Col>
                <Progress value={25}/>
            </Col>
        </Row>
        <Row>
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
        <Row className="pt-3 my-3">
            <Col>
                <div className="text-center btn-wrapper">
                    <Button
                    className="sub_button1 width_100 color_3 border_color_3"
                    color="none"
                    onClick={()=>{
                        onSetStep(2);
                    }}>
                    <span className="btn-inner--text">
                        다음
                    </span>
                    </Button>
                </div>
            </Col>
        </Row>
    </Container>;

    const step2 = 
    <Container className="mt-5">
        <Row className="mb-5 pb-5">
            <Col>
                <Progress value={50}/>
            </Col>
        </Row>
        <Row className="my-4 pt-5">
            <Col className="mt-4">
                <Row>
                    <Col>
                        <small>상호명을 입력해주세요.</small>
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
        <Row className="pt-3 my-3">
            <Col>
                <div className="text-center btn-wrapper">
                    <Button
                    className="sub_button1 width_100 color_2 border_color_2"
                    color="none"
                    onClick={()=>{
                        onSetStep(1);
                    }}>
                    <span className="btn-inner--text">
                        이전
                    </span>
                    </Button>
                </div>
            </Col>
            <Col>
                <div className="text-center btn-wrapper">
                    <Button
                    className="sub_button1 width_100 color_3 border_color_3"
                    color="none"
                    onClick={()=>{
                        onSetStep(3);
                    }}>
                    <span className="btn-inner--text">
                        다음
                    </span>
                    </Button>
                </div>
            </Col>
        </Row>
    </Container>;

    const step3 = 
    <Container className="mt-5">
        <Row className="mb-5 pb-5">
            <Col>
                <Progress value={75}/>
            </Col>
        </Row>
        <Row className="my-4 pt-5">
            <Col className="mt-4">
                <Row>
                    <Col>
                        <small>사업자등록증을 입력해주세요.</small>
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
        <Row className="pt-3 my-3">
            <Col>
                <div className="text-center btn-wrapper">
                    <Button
                    className="sub_button1 width_100 color_2 border_color_2"
                    color="none"
                    onClick={()=>{
                        onSetStep(2);
                    }}>
                    <span className="btn-inner--text">
                        이전
                    </span>
                    </Button>
                </div>
            </Col>
            <Col>
                <div className="text-center btn-wrapper">
                    <Button
                    className="sub_button1 width_100 color_3 border_color_3"
                    color="none"
                    onClick={()=>{
                        onSetStep(4);
                    }}>
                    <span className="btn-inner--text">
                        다음
                    </span>
                    </Button>
                </div>
            </Col>
        </Row>
    </Container>;

    const step4 = 
    <Container className="mt-5">
        <Row className="mb-5 pb-5">
            <Col>
                <Progress value={100}/>
            </Col>
        </Row>
        <Row className="my-4 pt-5">
            <Col className="mt-4">
                <Row>
                    <Col>
                        <small>연락처를 입력해주세요.</small>
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
        <Row className="pt-3 my-3">
            <Col>
                <div className="text-center btn-wrapper">
                    <Button
                    className="sub_button1 width_100 color_2 border_color_2"
                    color="none"
                    onClick={()=>{
                        onSetStep(3);
                    }}>
                    <span className="btn-inner--text">
                        이전
                    </span>
                    </Button>
                </div>
            </Col>
            <Col>
                <div className="text-center btn-wrapper">
                    <Button
                    className="sub_button1 width_100 color_4 border_color_4"
                    color="none"
                    onClick={()=>{
                        alert("야호~~!");
                    }}>
                    <span className="btn-inner--text">
                        가입하기
                    </span>
                    </Button>
                </div>
            </Col>
        </Row>
    </Container>;

    const [step, setStep] = useState(step1);

    const onSetStep = function(idx) {
        if(idx === 4) {
            setStep(step4);
        } else if (idx === 3) {
            setStep(step3);
        } else if (idx === 2) {
            setStep(step2);
        } else {
            setStep(step1);
        }
    }

    return (
        <>
            {step}
        </>
    );
}

export default Signup;