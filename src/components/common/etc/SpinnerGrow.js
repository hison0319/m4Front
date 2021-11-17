import React from "react";
import { Spinner } from "reactstrap";

const SpinnerGrow = () => {
    return(
        <>
            <Spinner
            style={{ 
                position: "fixed",
                top: "50%",
                left: "50%",
                zIndex:999,
            }}
            />
        </>
    );
}

export default SpinnerGrow;