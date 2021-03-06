import React, { useContext } from 'react';

import Header from 'components/navigation/Header';
import NavBottom from 'components/navigation/NavBottom';
import NormalProfileContainer from 'components/profile/normalProfile/NormalProfileContainer';
import BusinessProfileContainer from 'components/profile/businessProfile/BusinessProfileContainer';
import Account from 'components/account/Account';
import SpinnerGrow from "components/common/spinner/SpinnerGrow";
import { ProgressContext } from "context/Progress"

function AccountView() {
    // const sessionInfo = "BUSINESS_USER"
    // const sessionInfo = "NORMAL_USER"
    const sessionInfo = ""

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
            <NavBottom selected={3}/>
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

export default AccountView;