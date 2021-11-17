import React from 'react';
import { FaRegGrin } from 'react-icons/fa';

function BasicUserIcon() {
    const _style = {
        fontSize: "1.5em",
        lineHeight: "1"
    }

    return (
        <>
            <span style = {_style}>
                <FaRegGrin />
            </span>
        </>
    )
}

export default BasicUserIcon;
