import React, { useContext } from 'react';

import Manager from 'components/manager/Manager';
import SpinnerGrow from "components/common/etc/SpinnerGrow";
import { ProgressContext } from "context/Progress"

function ManagerView() {
    const {inProgress} = useContext(ProgressContext);
    return (
        <>
            {inProgress && <SpinnerGrow/>}
            <Manager />
        </>
    )
}

export default ManagerView;