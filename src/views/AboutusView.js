import React, { useContext } from 'react';
import Footer from "components/footers/Footer";
import SpinnerGrow from "components/common/etc/SpinnerGrow";
import { ProgressContext } from "context/Progress"

function AboutusView() {
    const {inProgress} = useContext(ProgressContext);
    return (
        <>
            {inProgress && <SpinnerGrow/>}
            <Footer />
        </>
    )
}

export default AboutusView;