import React from 'react';
import { FaAngry } from 'react-icons/fa';

function NoshowAngryIcon() {
    const _style = {
        fontSize: "1.1em",
    }

    return (
        <>
            <span style = {_style}>
                   <FaAngry className="text-danger"/>
            </span>
        </>
    )
}

export default NoshowAngryIcon;