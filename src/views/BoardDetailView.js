import React, { useContext } from 'react';

import BoardDetailContainer from 'components/board/BoardDetailContainer';
import SpinnerGrow from "components/common/spinner/SpinnerGrow";
import { ProgressContext } from "context/Progress"

function BoardDetailView() {
    const {inProgress} = useContext(ProgressContext);
    return (
        <>
            {inProgress && <SpinnerGrow/>}
            <BoardDetailContainer />
        </>
    )
}

export default BoardDetailView;