import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa';

function BookingIcon() {
    const _style = {
        fontSize: "1.1em",
    }

    return (
        <>
            <span style = {_style}>
                <FaCalendarCheck />
            </span>
        </>
    )
}

export default BookingIcon;