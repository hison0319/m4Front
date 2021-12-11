import React from 'react';
import { FaInstagram } from 'react-icons/fa';

function SNSInstagramIcon() {
    const _style = {
        fontSize: "1.8em",
        // margin: "0.5rem"
    }
    
    return (
        <>
            <span style = {_style}>
                    <FaInstagram />
            </span>
        </>
    )
}

export default SNSInstagramIcon;
