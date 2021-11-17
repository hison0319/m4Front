import React from 'react';
import { FaChartBar } from 'react-icons/fa';

function ManageDashIcon() {
    const _style = {
        fontSize: "1.2em",
    }

    return (
        <>
            <span style = {_style}>
                <FaChartBar />
            </span>
        </>
    )
}

export default ManageDashIcon;