import React from 'react';
import { BsFillExclamationDiamondFill } from 'react-icons/bs';

function WarningIcon() {
    const _style = {
        fontSize: "1.1em",
        color: "#ff7e67",
    }

    return (
        <>
            <span
            className="fix_color_4"
            style = {_style}>
                <BsFillExclamationDiamondFill />
            </span>
        </>
    )
}

export default WarningIcon;
