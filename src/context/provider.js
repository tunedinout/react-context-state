import React from 'react';

const GlobalContext = React.createContext();
const Provider = GlobalContext.Provider;
export const Consumer = GlobalContext.Consumer;

export const ProviderNew = function (props) {
    return (
        <div>
            <Provider value={props.store}>
                {props.children}
            </Provider>
        </div>

    )
}