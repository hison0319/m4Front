import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

function RemoveOptionIcon() {
    const _style = {
        fontSize: "1.2em",
        lineHeight: "1",
    }

    return (
        <>
            <span style = {_style}>
                <FaRegTrashAlt />
            </span>
        </>
    )
}

export default RemoveOptionIcon;
