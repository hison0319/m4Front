import React, { useContext } from 'react';

import BoardDetail from 'components/board/BoardDetail';
import SpinnerGrow from "components/common/etc/SpinnerGrow";
import { ProgressContext } from "context/Progress"

function BoardDetailView() {
    const {inProgress} = useContext(ProgressContext);
    return (
        <>
            {inProgress && <SpinnerGrow/>}
            <BoardDetail />
        </>
    )
}

export default BoardDetailView;