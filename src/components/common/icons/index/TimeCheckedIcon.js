import React from 'react';
import { FaClipboardCheck } from 'react-icons/fa';

function TimeCheckedIcon() {
    const _style = {
        fontSize: "1em",
    }

    return (
        <>
            <span style = {_style}>
                <FaClipboardCheck />
            </span>
        </>
    )
}

export default TimeCheckedIcon;