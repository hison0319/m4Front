import React from 'react';
import { FaCaretUp } from 'react-icons/fa';

function ListUpIcon() {
    const _style = {
        fontSize: "1.2em",
        color: "#fff",
    }

    return (
        <>
            <span style = {_style}>
                   <FaCaretUp />
            </span>
        </>
    )
}

export default ListUpIcon;