import React, { useContext } from 'react';
import AlarmListContainer from "components/alarm/AlarmListContainer";
import NavBottom from 'components/navigation/NavBottom';
import SpinnerGrow from "components/common/spinner/SpinnerGrow";
import { ProgressContext } from "context/Progress"

function AboutusView() {
    const {inProgress} = useContext(ProgressContext);
    return (
        <>
            {inProgress && <SpinnerGrow/>}
            <AlarmListContainer />
            <NavBottom selected={4}/>
        </>
    )
}

export default AboutusView;