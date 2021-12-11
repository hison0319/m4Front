import React, { useContext } from 'react';

import NormalProfileContainer from 'components/profile/normalProfile/NormalProfileContainer';
import BusinessProfileContainer from 'components/profile/businessProfile/BusinessProfileContainer';
import SpinnerGrow from "components/common/etc/SpinnerGrow";
import { ProgressContext } from "context/Progress"

function ProfileView() {
    const sessionInfo = "BUSINESS_USER"
    // const sessionInfo = "NORMAL_USER"
    const {inProgress} = useContext(ProgressContext);
    
    return (
        <>
            {inProgress && <SpinnerGrow/>}
            {sessionInfo === "BUSINESS_USER"?
            <BusinessProfileContainer
            userId={"test001"}/> :
            <NormalProfileContainer
            userId={"test002"}/>}
        </>
    )
}

export default ProfileView;