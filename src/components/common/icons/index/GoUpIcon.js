import React from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';

function GoUpIcon() {
    const _style = {
        fontSize: "2em",
        lineHeight: "1",
    }

    return (
        <>
            <span style = {_style}>
                <FaArrowAltCircleUp />
            </span>
        </>
    )
}

export default GoUpIcon;
