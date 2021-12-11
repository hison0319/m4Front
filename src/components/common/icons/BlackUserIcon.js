import React from 'react';
import { FaRegFrownOpen } from 'react-icons/fa';

function BlackUserIcon() {
    const _style = {
        fontSize: "1.4em",
        lineHeight: "1",
        // color:"orange"
    }

    return (
        <>
            <span style = {_style}>
                <FaRegFrownOpen />
            </span>
        </>
    )
}

export default BlackUserIcon;
