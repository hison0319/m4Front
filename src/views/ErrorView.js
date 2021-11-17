import React, { useContext } from 'react';
import ErrorContainer from 'components/errors/ErrorContainer';
import SpinnerGrow from "components/common/etc/SpinnerGrow";
import { ProgressContext } from "context/Progress"

function ErrorView(props) {
    const {inProgress} = useContext(ProgressContext);

    const { params } = props.match;
    const errorId = params.errorId;
    // console.log(errorId);
    
    return (
        <>
            {inProgress && <SpinnerGrow/>}
            <ErrorContainer errorId={errorId}/>
        </>
    )
}

export default ErrorView;