import React from 'react';
import { FaClipboard } from 'react-icons/fa';


function TimeUncheckedIcon() {
    const _style = {
        fontSize: "1.3em",
    }

    return (
        <>
            <span style = {_style}>
                <FaClipboard />
            </span>
        </>
    )
}

export default TimeUncheckedIcon;