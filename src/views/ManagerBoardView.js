import React, { useContext } from 'react';

import Manager from 'components/manager/board/BoardManager';
import SpinnerGrow from "components/common/spinner/SpinnerGrow";
import { ProgressContext } from "context/Progress"

function ManagerBoardView() {
    const {inProgress} = useContext(ProgressContext);
    return (
        <>
            {inProgress && <SpinnerGrow/>}
            <Manager />
        </>
    )
}

export default ManagerBoardView;