import React from 'react';
import { FaStoreAlt } from 'react-icons/fa';

function StoreOpenIcon() {
    const _style = {
        fontSize: "1.4em",
    }

    return (
        <>
            <span style = {_style}>
                <FaStoreAlt />
            </span>
        </>
    )
}

export default StoreOpenIcon;