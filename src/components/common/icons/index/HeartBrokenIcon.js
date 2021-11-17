import React from 'react';
import { FaHeartBroken } from 'react-icons/fa';

function HeartBrokenIcon() {
    const _style = {
        fontSize: "1em",
        margin: "1px",
        color: "#b12742"
    }

    return (
        <>
            <span style = {_style}>
                    <FaHeartBroken />
            </span>
        </>
    )
}

export default HeartBrokenIcon;
