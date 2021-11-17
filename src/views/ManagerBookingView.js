import React, { useContext } from 'react';

import BookingManagerContainer from 'components/manager/booking/BookingManagerContainer';
import SpinnerGrow from "components/common/etc/SpinnerGrow";
import { ProgressContext } from "context/Progress"

function ManagerBookingView() {
    const {inProgress} = useContext(ProgressContext);
    return (
        <>
            {inProgress && <SpinnerGrow/>}
            <BookingManagerContainer />
        </>
    )
}

export default ManagerBookingView;