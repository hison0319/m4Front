import React from 'react';
import { FaCaretDown } from 'react-icons/fa';

function ListDownIcon() {
    const _style = {
        fontSize: "1.2em",
        color: "#fff",
    }

    return (
        <>
            <span style = {_style}>
                <FaCaretDown />
            </span>
        </>
    )
}

export default ListDownIcon;