/*
작성자 : 손한이
작성일 : 2022.02.01
내용 :  사업자 계정의 회원가입(기능, 뷰)
*/
import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Input,
    Button,
    Progress
} from "reactstrap"
import PropTypes from "prop-types";
import {
    removeSpc,
    removeNotPhone,
} from "utils/common";
import {
    PasswordHidden,
    PasswordText
} from "components/common/icons/Index";

const Signup = ({
    //값
    varEmail,
    varPassword,
    varName,
    varBusinessRegNumber,
    varContactNumber,
    varNationCode,
    nationCodeListAll,
    onChangeText,
    setVarNationCode,
    onRefetch,
    //유효성검사
    isValidEmail,
    isValidPassword,
    isValidName,
    isValidBusinessRegNumber,
    isValidContactNumber,
    checkEmail,
    checkPassword,
    checkName,
    checkBusinessRegNumber,
    checkContactNumber,
    emailValidComment,
    passwordValidComment,
    nameValidComment,
    businessRegNumberValidComment,
    contactNumberValidComment,
    emailValidCommentColor,
    passwordValidCommentColor,
    nameValidCommentColor,
    businessRegNumberValidCommentColor,
    contactNumberValidCommentColor,
}) => {
    const [step, setStep] = useState(1);
    const [passwordTypeIcon, setPasswordTypeIcon] = useState(<PasswordHidden/>);
    const [passwordType, setPasswordType] = useState("password");
    const [passwordTypeToggle, setPasswordTypeToggle] = useState(true);
    
    const nextbtn1Disabled = isValidEmail && isValidPassword ? false : true;
    const nextbtn2Disabled = isValidName ? false : true;
    const nextbtn3Disabled = isValidBusinessRegNumber ? false : true;
    const nextbtn4Disabled = isValidContactNumber ? false : true;

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
        <>
            {step === 1 &&
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
                                <small className={passwordValidCommentColor}>{passwordValidComment}</small>
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
                                    checkPassword(e.target.value);
                                }}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="pt-3 my-3">
                    <Col>
                        <div className="text-center btn-wrapper">
                            <Button
                            disabled={nextbtn1Disabled}
                            className="sub_button1 width_100 color_3 border_color_3"
                            color="none"
                            onClick={()=>{
                                setStep(2);
                            }}>
                            <span className="btn-inner--text">
                                다음
                            </span>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>}
            {step === 2 &&
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
                                <small className={nameValidCommentColor}>{nameValidComment}</small>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Input
                                type="text"
                                name="varName"
                                id="varName"
                                placeholder=""
                                maxLength={100}
                                value={varName||""}
                                onChange={(e)=>{
                                    e.target.value = removeSpc(e.target.value);
                                    onChangeText(e);
                                    checkName(e.target.value);
                                }}
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
                                setStep(1);
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
                            disabled={nextbtn2Disabled}
                            className="sub_button1 width_100 color_3 border_color_3"
                            color="none"
                            onClick={()=>{
                                setStep(3);
                            }}>
                            <span className="btn-inner--text">
                                다음
                            </span>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>}
            {step === 3 &&
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
                                <small className={businessRegNumberValidCommentColor}>{businessRegNumberValidComment}</small>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Input
                                type="text"
                                name="varBusinessRegNumber"
                                id="varBusinessRegNumber"
                                placeholder=""
                                maxLength={100}
                                value={varBusinessRegNumber||""}
                                onChange={(e)=>{
                                    e.target.value = removeNotPhone(e.target.value);
                                    onChangeText(e);
                                    checkBusinessRegNumber(e.target.value);
                                }}
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
                                setStep(2);
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
                            disabled={nextbtn3Disabled}
                            className="sub_button1 width_100 color_3 border_color_3"
                            color="none"
                            onClick={()=>{
                                setStep(4);
                            }}>
                            <span className="btn-inner--text">
                                다음
                            </span>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>}
            {step === 4 &&
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
                                <small className={contactNumberValidCommentColor}>{contactNumberValidComment}</small>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="3">
                                <Input
                                type="select"
                                name="varNationCode"
                                value={varNationCode||69}
                                onChange={(e)=>{
                                    e.target.value = removeNotPhone(e.target.value);
                                    setVarNationCode(e.target.value);
                                }}>
                                {nationCodeListAll.map((item) => 
                                    <option key={item.value} value={item.value}>{item.text}</option>
                                )}
                                </Input>
                            </Col>
                            <Col xs="9">
                                <Input
                                type="text"
                                name="varContactNumber"
                                id="varContactNumber"
                                placeholder=""
                                maxLength={100}
                                value={varContactNumber||""}
                                onChange={(e)=>{
                                    onChangeText(e);
                                    checkContactNumber(e.target.value);
                                }}
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
                                setStep(3);
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
                            disabled={nextbtn4Disabled}
                            className="sub_button1 width_100 color_4 border_color_4"
                            color="none"
                            onClick={()=>{
                                alert("야호~~!");
                                onRefetch();
                            }}>
                            <span className="btn-inner--text">
                                가입하기
                            </span>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>}
        </>
    );
}

Signup.propTypes = {
    varEmail: PropTypes.string,
    varPassword: PropTypes.string,
    varName: PropTypes.string,
    varBusinessRegNumber: PropTypes.string,
    varContactNumber: PropTypes.string,
    varNationCode: PropTypes.string,
    nationCodeListAll: PropTypes.array,
    onChangeText: PropTypes.func,
    setVarNationCode: PropTypes.func,
    onRefetch: PropTypes.func,
    isValidEmail: PropTypes.bool,
    isValidPassword: PropTypes.bool,
    isValidName: PropTypes.bool,
    isValidBusinessRegNumber: PropTypes.bool,
    isValidContactNumber: PropTypes.bool,
    emailValidComment: PropTypes.string,
    passwordValidComment: PropTypes.string,
    nameValidComment: PropTypes.string,
    businessRegNumberValidComment: PropTypes.string,
    contactNumberValidComment: PropTypes.string,
    emailValidCommentColor: PropTypes.string,
    passwordValidCommentColor: PropTypes.string,
    nameValidCommentColor: PropTypes.string,
    businessRegNumberValidCommentColor: PropTypes.string,
    contactNumberValidCommentColor: PropTypes.string,
    checkEmail: PropTypes.func,
    checkPassword: PropTypes.func,
    checkName: PropTypes.func,
    checkBusinessRegNumber: PropTypes.func,
    checkContactNumber: PropTypes.func,
};

export default Signup;