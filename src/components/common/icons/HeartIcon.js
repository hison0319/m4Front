import React from 'react';
import { FaHeart } from 'react-icons/fa';

function HeartIcon() {
    const _style = {
        fontSize: "1em",
        margin: "1px",
        color: "#b12742"
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
