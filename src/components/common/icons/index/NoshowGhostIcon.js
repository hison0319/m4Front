import React from 'react';
import { FaGhost } from 'react-icons/fa';

function NoshowGhostIcon() {
    const _style = {
        fontSize: "1.2em",
    }

    return (
        <>
            <span style = {_style}>
                   <FaGhost  className="color_4"/>
            </span>
        </>
    )
}

export default NoshowGhostIcon;