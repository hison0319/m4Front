import React from 'react';
import { FaEyeSlash } from 'react-icons/fa';

function PasswordHidden() {
    const _style = {
        fontSize: "1em",
    }

    return (
        <>
            <span style = {_style}>
                <FaEyeSlash />
            </span>
        </>
    )
}

export default PasswordHidden;
