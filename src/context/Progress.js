import React, {useState, createContext} from 'react';

const ProgressContext = createContext({
    inProgress: false,
    spinner: () => {},
});

const ProgressProvider = ({children}) => {
    const [inProgress, setInProgress] = useState(false);
    const spinner = {
        start: function() {
            setInProgress(true)
            // 5초 이상 지속될 시 강제 종료
            setTimeout(() => {
                this.stop()
            }, 5000);
        },
        stop: () => setInProgress(false),
    };
    const value = {inProgress, spinner};
    return (
        <ProgressContext.Provider
        value={value}
        >{children}
        </ProgressContext.Provider>
    );
};

export {ProgressContext, ProgressProvider};