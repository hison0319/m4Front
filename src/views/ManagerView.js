import React, { useContext } from 'react';
import Manager from 'components/manager/Manager';
import NavBottom from 'components/navigation/NavBottom';
import SpinnerGrow from "components/common/spinner/SpinnerGrow";
import { ProgressContext } from "context/Progress"

function ManagerView() {
    const {inProgress} = useContext(ProgressContext);
    return (
        <>
            {inProgress && <SpinnerGrow/>}
            <Manager/>
            <NavBottom selected={2}/>
        </>
    )
}

export default ManagerView;