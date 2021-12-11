import React from 'react';
import { FaLinux } from 'react-icons/fa';

function LogoIcon() {
    const _style = {
        fontSize: "1.2em",
        color: '#C94A18',
        fontWeight: 'bold',
    }

    return (
        <>
            <span style = {_style}>
                <FaLinux />
            </span>
        </>
    )
}

export default LogoIcon;