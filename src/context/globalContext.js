import React from 'react';

const GlobalContext = React.createContext();

const Provider = GlobalContext.Provider;
const Consumer = GlobalContext.Consumer;

export const ProviderNew = function (props) {
    return (
        <div>
            <Provider value={props.store}>
                {props.children}
            </Provider>
        </div>

    )
}


export function Consume(mapStateToProps, mapActionsToProps, ReactComponent) {
    return class extends React.Component {
        render() {

            return (
                <Consumer>
                    {(allProps) => {
                        console.log(allProps);
                        let propFunctions, propVariables;
                        if (typeof mapStateToProps === 'function')
                            propVariables = mapStateToProps(allProps);
                        if (typeof mapActionsToProps === 'function')
                            propFunctions = mapActionsToProps(allProps);
                        return <ReactComponent {...propVariables} {...propFunctions} />
                    }}
                </Consumer>
            )
        }
    }
}




