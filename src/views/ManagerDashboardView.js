import React, { useContext } from 'react';

import Dashboard from 'components/manager/dashboard/Dashboard';
import SpinnerGrow from "components/common/spinner/SpinnerGrow";
import { ProgressContext } from "context/Progress"

function ManagerDashboardView() {
    const {inProgress} = useContext(ProgressContext);
    return (
        <>
            {inProgress && <SpinnerGrow/>}
            <Dashboard />
        </>
    )
}

export default ManagerDashboardView;