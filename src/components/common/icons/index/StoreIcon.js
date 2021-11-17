import React from 'react';
import { FaStore } from 'react-icons/fa';

function StoreIcon() {
    const _style = {
        fontSize: "1.2em",
    }

    return (
        <>
            <span style = {_style}>
                <FaStore />
            </span>
        </>
    )
}

export default StoreIcon;