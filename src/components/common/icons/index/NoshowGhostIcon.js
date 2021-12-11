import React from 'react';
import { FaGhost } from 'react-icons/fa';

function NoshowGhostIcon() {
    const _style = {
        fontSize: "1.2em",
    }

    return (
        <>
            <span style = {_style}>
                   <FaGhost  className="text-danger"/>
            </span>
        </>
    )
}

export default NoshowGhostIcon;