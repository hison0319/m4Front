import React from 'react';
import { FaHeartBroken } from 'react-icons/fa';

function HeartBrokenIcon() {
    const _style = {
        fontSize: "0.9em",
        margin: "0.9px",
        color: "#ff7e67"
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
