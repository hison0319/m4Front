import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

function SubmitIcon() {
    const _style = {
        fontSize: "1em",
    }

    return (
        <>
            <span style = {_style}>
                <FaPaperPlane />
            </span>
        </>
    )
}

export default SubmitIcon;