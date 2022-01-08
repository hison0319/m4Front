import React, { useContext } from 'react';
import Account from 'components/account/Account';
import SpinnerGrow from "components/common/spinner/SpinnerGrow";
import { ProgressContext } from "context/Progress"

function SigninView() {
    const {inProgress} = useContext(ProgressContext);
    return (
        <>
            {inProgress && <SpinnerGrow/>} 
            <Account/>
        </>
    )
}

export default SigninView;