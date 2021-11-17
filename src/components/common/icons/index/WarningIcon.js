import React from 'react';
import { BsFillExclamationDiamondFill } from 'react-icons/bs';

function WarningIcon() {
    const _style = {
        fontSize: "1.5em",
        lineHeight: "1",
    }

    return (
        <>
            <span
            className="text-warning"
            style = {_style}>
                <BsFillExclamationDiamondFill />
            </span>
        </>
    )
}

export default WarningIcon;
