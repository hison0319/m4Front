import React from 'react';
import { FaEdit } from 'react-icons/fa';

function ModifyIcon() {
    const _style = {
        fontSize: "1.1em",
    }

    return (
        <>
            <span style = {_style}>
                <FaEdit />
            </span>
        </>
    )
}

export default ModifyIcon;