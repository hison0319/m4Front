import React from 'react';
import { FaEye } from 'react-icons/fa';

function PasswordText() {
    const _style = {
        fontSize: "1em",
    }

    return (
        <>
            <span style = {_style}>
                <FaEye />
            </span>
        </>
    )
}

export default PasswordText;
