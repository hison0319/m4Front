import React from 'react';
import { FaRegGrinSquint } from 'react-icons/fa';

function WhiteUserIcon() {
    const _style = {
        fontSize: "1.4em",
        lineHeight: "1"
    }

    return (
        <>
            <span style = {_style}>
                <FaRegGrinSquint />
            </span>
        </>
    )
}

export default WhiteUserIcon;
