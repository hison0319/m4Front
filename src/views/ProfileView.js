import React, { useContext, useEffect, useState } from 'react';

import Header from 'components/navigation/Header';
import NavBottom from 'components/navigation/NavBottom';
import NormalProfileContainer from 'components/profile/normalProfile/NormalProfileContainer';
import BusinessProfileContainer from 'components/profile/businessProfile/BusinessProfileContainer';
import Account from 'components/account/Account';
import SpinnerGrow from "components/common/spinner/SpinnerGrow";

import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"

import { 
    getQueryStringObject,
    setCookie,
    getCookie,
} from "utils/common"

async function getMember(accessToken) {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}?accessToken=${accessToken}`
    );
    return response.data;
}

function ProfileView(props) {
    const { search } = props.location;
    const qs = getQueryStringObject(search);
    if(qs.accessToken && !getCookie("accessToken")) {
        setCookie("accessToken", qs.accessToken, 1);
    }
    const accessToken = getCookie("accessToken");
    const {spinner} = useContext(ProgressContext);
    const [state] = useAsync(() => getMember(accessToken), [accessToken], false);
    const { loading, data: member, error } = state;

    const [memberType, setMemberType] = useState("");
    useEffect(() => {
        if(loading) {
            spinner.start();
        } else {
            if(accessToken) {
                setMemberType("BUSINESS");
                // setMemberType("NORMAL");
            }
            if(qs.accessToken) {
                window.location.href = "/";
            }
            spinner.stop();
        }
        if(error) {
            console.log(error.response);
            // window.location.href = '/error/200';
        }
    },[loading, error, spinner]);

    let viewPage;
    if(memberType === "NORMAL") {
        viewPage = <>
            <Header/>
            <NormalProfileContainer
            userId={"test002"}/>
            <NavBottom selected={1}/>
        </>
    } else if(memberType === "BUSINESS") {
        viewPage = <>
            <Header/>
            <BusinessProfileContainer
            userId={"test001"}/>
            <NavBottom selected={1}/>
        </>
    } else {
        viewPage = <>
            <Account
            isModalOpen={false}/>
        </>
    }

    const {inProgress} = useContext(ProgressContext);
    return (
        <>
            {inProgress && <SpinnerGrow/>}
            {viewPage}
        </>
    )
}

export default ProfileView;