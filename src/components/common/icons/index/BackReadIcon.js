import React from 'react';
import { FaReply } from 'react-icons/fa';

function BackReadIcon() {
    const _style = {
        fontSize: "1.1em",
    }

    return (
        <>
            <span style = {_style}>
                <FaReply />
            </span>
        </>
    )
}

export default BackReadIcon;