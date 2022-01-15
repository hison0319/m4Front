import React, { useContext } from 'react';

import Header from 'components/navigation/Header';
import NavBottom from 'components/navigation/NavBottom';
import NormalProfileContainer from 'components/profile/normalProfile/NormalProfileContainer';
import BusinessProfileContainer from 'components/profile/businessProfile/BusinessProfileContainer';
import SpinnerGrow from "components/common/spinner/SpinnerGrow";
import { ProgressContext } from "context/Progress"

function ProfileView() {
    // const sessionInfo = "BUSINESS_USER"
    const sessionInfo = "NORMAL_USER"
    const {inProgress} = useContext(ProgressContext);
    console.log('sessionInfo',sessionInfo);

    return (
        <>
            <Header/>
            {inProgress && <SpinnerGrow/>}
            {sessionInfo === "BUSINESS_USER"?
            <BusinessProfileContainer
            userId={"test001"}/> :
            <NormalProfileContainer
            userId={"test002"}/>}
            <NavBottom selected={1}/>
        </>
    )
}

export default ProfileView;