import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

function ManageChkBookIcon() {
    const _style = {
        fontSize: "1.1em",
    }

    return (
        <>
            <span style = {_style}>
                <FaCalendarAlt />
            </span>
        </>
    )
}

export default ManageChkBookIcon;