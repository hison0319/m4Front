import React, { useContext } from 'react';
import CheckContainer from "components/check/CheckContainer";
import NavBottom from 'components/navigation/NavBottom';
import SpinnerGrow from "components/common/spinner/SpinnerGrow";
import { ProgressContext } from "context/Progress"

function AboutusView() {
    const {inProgress} = useContext(ProgressContext);
    return (
        <>
            {inProgress && <SpinnerGrow/>}
            <CheckContainer />
            <NavBottom selected={2}/>
        </>
    )
}

export default AboutusView;