import React from 'react';
import { FaQrcode } from 'react-icons/fa';

function QrIcon() {
    const _style = {
        fontSize: "1.3em",
    }

    return (
        <>
            <span style = {_style}>
                <FaQrcode />
            </span>
        </>
    )
}

export default QrIcon;
