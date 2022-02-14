import React, { useContext, useEffect } from 'react';

import Header from 'components/navigation/Header';
import NavBottom from 'components/navigation/NavBottom';
import NormalProfileContainer from 'components/profile/normalProfile/NormalProfileContainer';
import BusinessProfileContainer from 'components/profile/businessProfile/BusinessProfileContainer';
import Account from 'components/account/Account';
import SpinnerGrow from "components/common/spinner/SpinnerGrow";
import { ProgressContext } from "context/Progress"

function ProfileView() {
    const sessionInfo = "BUSINESS_USER"
    // const sessionInfo = "NORMAL_USER"
    // const sessionInfo = ""

    useEffect(()=>{
        var req = new XMLHttpRequest();
        console.log(req);
    },[])

    let viewPage;

    if(sessionInfo === "NORMAL_USER") {
        viewPage = <>
            <Header/>
            <NormalProfileContainer
            userId={"test002"}/>
            <NavBottom selected={1}/>
        </>
    } else if(sessionInfo === "BUSINESS_USER") {
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