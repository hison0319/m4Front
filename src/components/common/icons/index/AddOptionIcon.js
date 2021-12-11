import React from 'react';
import { FaPlus } from 'react-icons/fa';

function AddOptionIcon() {
    const _style = {
        fontSize: "1.2em",
        lineHeight: "1",
    }

    return (
        <>
            <span style = {_style}>
                <FaPlus />
            </span>
        </>
    )
}

export default AddOptionIcon;
