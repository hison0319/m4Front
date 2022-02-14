/*
작성자 : 손한이
작성일 : 2022.02.01
내용 :  사업자 계정의 회원가입(기능)
       API - userController - get
*/
import React, { useState, useRef, useEffect, useContext } from 'react';
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"
import Signup from "./Signup";
import AlertModal from 'components/common/alert/AlertModal';
import { useTextInput } from 'hooks';
import {
    getNationCodeListAll,
    validateEmail,
    chkStrMinLength
} from "utils/common"

async function postMember(member) {
    const response = await axios.post(
        "/member",
        member,
    );
    return response.data;
}

const SignupContainer = () => {
    // member date text input 생성
    const [{ 
        varEmail,
        varPassword,
        varName,
        varBusinessRegNumber,
        varContactNumber,
    }, onChangeText] = useTextInput({
        varEmail: "",
        varPassword: "",
        varName: "",
        varBusinessRegNumber: "",
        varContactNumber: "",
    });

    //연락처 국가코드
    const [varNationCode, setVarNationCode] = useState("69");
    const nationCodeListAll = getNationCodeListAll();

    //유효성 검사용 state
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [isValidName, setIsValidName] = useState(false);
    const [isValidBusinessRegNumber, setIsValidBusinessRegNumber] = useState(false);
    const [isValidContactNumber, setIsValidContactNumber] = useState(false);
    
    const [emailValidComment, setEmailValidComment] = useState("이메일을 입력해 주세요.");
    const [passwordValidComment, setPasswordValidComment] = useState("비밀번호를 입력해 주세요.");
    const [nameValidComment, setNameValidComment] = useState("상호명을 입력해 주세요.");
    const [businessRegNumberValidComment, setBusinessRegNumberValidComment] = useState("사업자등록번호를 입력해 주세요.");
    const [contactNumberValidComment, setContactNumberValidComment] = useState("연락처를 입력해 주세요.");

    const [emailValidCommentColor, setEmailValidCommentColor] = useState("basic_color_0");
    const [passwordValidCommentColor, setPasswordValidCommentColor] = useState("basic_color_0");
    const [nameValidCommentColor, setNameValidCommentColor] = useState("basic_color_0");
    const [businessRegNumberValidCommentColor, setBusinessRegNumberValidCommentColor] = useState("basic_color_0");
    const [contactNumberValidCommentColor, setContactNumberValidCommentColor] = useState("basic_color_0");

    //유효성 검사 function
    const checkEmail = (email) => {
        const isValid = validateEmail(email);
        setIsValidEmail(isValid);
        setEmailValidComment(isValid?"가입 가능한 이메일 입니다.":"올바른 이메일을 입력해 주세요.");
        setEmailValidCommentColor(isValid?"fix_color_3":"fix_color_4");
    }
    const checkPassword = (password) => {
        const isValid = chkStrMinLength(0, password);
        setIsValidPassword(isValid);
        setPasswordValidComment(isValid?"사용 가능한 비밀번호 입니다.":"올바른 비밀번호를 입력해 주세요.");
        setPasswordValidCommentColor(isValid?"fix_color_3":"fix_color_4");
    }
    const checkName = (name) => {
        const isValid = chkStrMinLength(0, name);
        setIsValidName(isValid);
        setNameValidComment(isValid?"사용 가능한 상호명 입니다.":"올바른 상호명을 입력해 주세요.");
        setNameValidCommentColor(isValid?"fix_color_3":"fix_color_4");
    }
    const checkBusinessRegNumber = (businessRegNumber) => {
        const isValid = chkStrMinLength(0, businessRegNumber);
        setIsValidBusinessRegNumber(isValid);
        setBusinessRegNumberValidComment(isValid?"사용 가능한 사업자등록번호 입니다.":"올바른 사업자등록번호를 입력해 주세요.");
        setBusinessRegNumberValidCommentColor(isValid?"fix_color_3":"fix_color_4");
    }
    const checkContactNumber = (contactNumber) => {
        const isValid = chkStrMinLength(0, contactNumber);
        setIsValidContactNumber(isValid);
        setContactNumberValidComment(isValid?"사용 가능한 연락처 입니다.":"올바른 연락처를 입력해 주세요.");
        setContactNumberValidCommentColor(isValid?"fix_color_3":"fix_color_4");
    }

    // 비지니스 계정 등록
    const {spinner} = useContext(ProgressContext);
    const [state, refetch] = useAsync(() => postMember({
        // varNationCode: varNationCode,
        name: varName,
        email: varEmail,
        password: varPassword,
        businessRegNumber: varBusinessRegNumber,
        contactNumbers: {
            values: [{
                value: varContactNumber
            }]
        }
    }), [], true);
    
    const onRefetch = () => {
        refetch();
    }

    const alertRef1 = useRef();
    const alertRef2 = useRef();

    const AlertModal1 = 
    <AlertModal
      ref={alertRef1}
      comment="가입을 축하드립니다!"
      closingModal={()=>{
        window.location.href = "/";
    }}
    />;
    const AlertModal2 = 
    <AlertModal
    ref={alertRef2}
    comment="죄송합니다. 오류로 인해 저장 실패했습니다. 개발자에게 문의해주세요."
    closingModal={()=>{
        window.location.href = "/";
    }}
    />;

    useEffect(()=>{
        const { loading, data: member, error } = state;
        if(member) {
            console.log(member);
            alert(member);
            // alertRef1.current.showAlert();
        } else if(error) {
            console.log(error.response);
            alertRef2.current.showAlert();
        }
        if(loading) {
            spinner.start();
        } else {
            spinner.stop();
        }
    },[state]);

    return (
        <>
            <Signup
            varEmail={varEmail}
            varPassword={varPassword}
            varName={varName}
            varBusinessRegNumber={varBusinessRegNumber}
            varContactNumber={varContactNumber}
            varNationCode={varNationCode}
            nationCodeListAll={nationCodeListAll}
            onChangeText={onChangeText}
            setVarNationCode={setVarNationCode}
            onRefetch={onRefetch}
            isValidEmail={isValidEmail}
            isValidPassword={isValidPassword}
            isValidName={isValidName}
            isValidBusinessRegNumber={isValidBusinessRegNumber}
            isValidContactNumber={isValidContactNumber}
            checkEmail={checkEmail}
            checkPassword={checkPassword}
            checkName={checkName}
            checkBusinessRegNumber={checkBusinessRegNumber}
            checkContactNumber={checkContactNumber}
            emailValidComment={emailValidComment}
            passwordValidComment={passwordValidComment}
            nameValidComment={nameValidComment}
            businessRegNumberValidComment={businessRegNumberValidComment}
            contactNumberValidComment={contactNumberValidComment}
            emailValidCommentColor={emailValidCommentColor}
            passwordValidCommentColor={passwordValidCommentColor}
            nameValidCommentColor={nameValidCommentColor}
            businessRegNumberValidCommentColor={businessRegNumberValidCommentColor}
            contactNumberValidCommentColor={contactNumberValidCommentColor}
            />
            {AlertModal1}
            {AlertModal2}
        </>
    );
}

export default SignupContainer;