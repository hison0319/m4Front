import React from 'react';
import { FaHeart } from 'react-icons/fa';

function HeartIcon() {
    const _style = {
        fontSize: "0.9em",
        margin: "0.9px",
        color: "#ff7e67"
    }

    return (
        <>
            <span style = {_style}>
                    <FaHeart />
            </span>
        </>
    )
}

export default HeartIcon;
