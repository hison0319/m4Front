/*
작성자 : 손한이
작성일 : 2022.02.01
내용 :  사업자 계정의 로그인(뷰)
*/
import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Input,
    Button
} from "reactstrap"
import PropTypes from "prop-types";
import {
    PasswordHidden,
    PasswordText
} from "components/common/icons/Index";

const Signin = ({
    varEmail,
    varPassword,
    onChangeText,
    isValidEmail,
    emailValidComment,
    emailValidCommentColor,
    checkEmail,
    onRefetch,
}) => {
    const [passwordTypeIcon, setPasswordTypeIcon] = useState(<PasswordHidden/>);
    const [passwordType, setPasswordType] = useState("password");
    const [passwordTypeToggle, setPasswordTypeToggle] = useState(true);
    const nextbtn1Disabled = isValidEmail ? false : true;

    const onSetPasswordTypeToggle = (isPasswordType) => {
        if(isPasswordType) {
            setPasswordTypeIcon(<PasswordHidden/>);
            setPasswordType("password");
            setPasswordTypeToggle(true);
        } else {
            setPasswordTypeIcon(<PasswordText/>);
            setPasswordType("text");
            setPasswordTypeToggle(false);
        }
    };

    return (
        <Container className="my-5">
            <Row className="my-4">
                <Col>
                    <Row>
                        <Col>
                            <small className={emailValidCommentColor}>{emailValidComment}</small>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                            type="text"
                            name="varEmail"
                            id="varEmail"
                            maxLength={100}
                            value={varEmail}
                            onChange={(e)=>{
                                onChangeText(e);
                                checkEmail(e.target.value);
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
                            <small>비밀번호</small>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2">
                            <Button
                            className="btn-icon-only rounded-circle"
                            color="neutral"
                            onClick={()=>{
                                onSetPasswordTypeToggle(!passwordTypeToggle);
                            }}
                            >
                                <span className="btn-inner--icon">
                                {passwordTypeIcon}
                                </span>
                            </Button>
                        </Col>
                        <Col xs="10">
                            <Input
                            type={passwordType}
                            name="varPassword"
                            id="varPassword"
                            placeholder=""
                            maxLength={20}
                            value={varPassword||""}
                            onChange={(e)=>{
                                onChangeText(e);
                            }}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="pt-3 my-3">
                <Col className="mt-4">
                    <div className="text-center btn-wrapper">
                        <Button
                        disabled={nextbtn1Disabled}
                        className="sub_button1 width_100 color_4 border_color_4"
                        color="none"
                        onClick={()=>{
                            onRefetch();
                        }}>
                        <span>
                            로그인
                        </span>
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <div className="text-center btn-wrapper">
                        <Button
                        className="sub_button1 width_100 color_2 border_color_2"
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
            <Row className="my-3">
                <Col>
                    <div className="text-center btn-wrapper">
                        <Button
                        className="sub_button1 width_100 color_2 border_color_2"
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

Signin.propTypes = {
    varEmail: PropTypes.string,
    varPassword: PropTypes.string,
    onChangeText: PropTypes.func,
    isValidEmail: PropTypes.bool,
    emailValidComment: PropTypes.string,
    emailValidCommentColor: PropTypes.string,
    checkEmail: PropTypes.func,
    onRefetch: PropTypes.func,
};

export default Signin