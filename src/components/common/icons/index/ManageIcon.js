import React from 'react';
import { FaMarker } from 'react-icons/fa';

function ManageIcon() {
    const _style = {
        fontSize: "1.2em",
    }

    return (
        <>
            <span style = {_style}>
                <FaMarker />
            </span>
        </>
    )
}

export default ManageIcon;