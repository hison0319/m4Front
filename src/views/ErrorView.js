import React, { useContext } from 'react';
import ErrorContainer from 'components/errors/ErrorContainer';
import SpinnerGrow from "components/common/spinner/SpinnerGrow";
import { ProgressContext } from "context/Progress"
import Header from 'components/navigation/Header';
import NavBottom from 'components/navigation/NavBottom';

function ErrorView(props) {
    const {inProgress} = useContext(ProgressContext);

    const { params } = props.match;
    const errorId = params.errorId;
    // console.log(errorId);
    
    return (
        <>
            {inProgress && <SpinnerGrow/>}
            <Header/>
            <ErrorContainer errorId={errorId}/>
            <NavBottom/>
        </>
    )
}

export default ErrorView;