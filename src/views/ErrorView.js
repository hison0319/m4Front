import React, { useContext } from 'react';
import ErrorContainer from 'components/errors/ErrorContainer';
import SpinnerGrow from "components/common/spinner/SpinnerGrow";
import { ProgressContext } from "context/Progress"
import Header from 'components/navigation/Header';
import NavBottom from 'components/navigation/NavBottom';

function ErrorView(props) {
    const {inProgress} = useContext(ProgressContext);

    const { params } = props.match;
    const errorCode = params.errorCode;
    return (
        <>
            {inProgress && <SpinnerGrow/>}
            <Header/>
            <ErrorContainer errorCode={errorCode}/>
            <NavBottom/>
        </>
    )
}

export default ErrorView;