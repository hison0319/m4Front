/*
작성자 : 손한이
작성일 : 2022.02.01
내용 :  사업자 계정의 로그인(기능)
       API - userController - get
*/
import React, { useState, useRef, useEffect, useContext } from 'react';
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"
import Signin from "./Signin";
import AlertModal from 'components/common/alert/AlertModal';
import { useTextInput } from 'hooks';
import {
    validateEmail,
} from "utils/common"

async function signin(email, password) {
    console.log(email, password);
    const response = await axios.post(
        "/login",
        {
            email: email,
            password: password,
        },
    );
    return response.data;
}

const SigninContainer = () => {
    const [{ 
        varEmail,
        varPassword,
    }, onChangeText] = useTextInput({
        varEmail: "",
        varPassword: "",
    });
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [emailValidComment, setEmailValidComment] = useState("이메일을 입력해 주세요.");
    const [emailValidCommentColor, setEmailValidCommentColor] = useState("basic_color_0");

    //유효성 검사 function
    const checkEmail = (email) => {
        const isValid = validateEmail(email);
        setIsValidEmail(isValid);
        setEmailValidComment(isValid?"올바른 이메일 양식 입니다.":"올바른 이메일 양식을 입력해 주세요.");
        setEmailValidCommentColor(isValid?"fix_color_3":"fix_color_4");
    }

    // 비지니스 계정 등록
    const {spinner} = useContext(ProgressContext);
    const [state, refetch] = useAsync(() => signin(
        varEmail, varPassword
    ), [], true);
    
    const onRefetch = () => {
        refetch();
    }

    const alertRef1 = useRef();
    const AlertModal1 = 
    <AlertModal
    ref={alertRef1}
    comment="죄송합니다. 오류로 인해 로그인 실패했습니다. 개발자에게 문의해주세요."
    closingModal={()=>{
    }}
    />;

    useEffect(()=>{
        const { loading, data: member, error } = state;
        if(member) {
            window.location.href = "/";
        } else if(error) {
            alertRef1.current.showAlert();
        }
        if(loading) {
            spinner.start();
        } else {
            spinner.stop();
        }
    },[state]);

    return (
        <>
            <Signin
            varEmail={varEmail}
            varPassword={varPassword}
            onChangeText={onChangeText}
            isValidEmail={isValidEmail}
            emailValidComment={emailValidComment}
            emailValidCommentColor={emailValidCommentColor}
            checkEmail={checkEmail}
            onRefetch={onRefetch}
            />
            {AlertModal1}
        </>
    );

}

export default SigninContainer