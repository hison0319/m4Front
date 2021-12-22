import React, { useContext } from 'react';

import FeedList from 'components/FeedList';
import SpinnerGrow from "components/common/spinner/SpinnerGrow";
import { ProgressContext } from "context/Progress"

function HomeView() {
    const {inProgress} = useContext(ProgressContext);
    return (
        <>
            {inProgress && <SpinnerGrow/>}
            <FeedList />
        </>
    )
}

export default HomeView;