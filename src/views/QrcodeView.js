import React, { useContext } from 'react';
import Header from 'components/navigation/Header';
import NavBottom from 'components/navigation/NavBottom';
import SpinnerGrow from "components/common/spinner/SpinnerGrow";
import { ProgressContext } from "context/Progress"

function QrcodeView() {
    const {inProgress} = useContext(ProgressContext);
    return (
        <>
            {inProgress && <SpinnerGrow/>}
            <Header/>
            <NavBottom selected={3}/>
        </>
    )
}

export default QrcodeView;