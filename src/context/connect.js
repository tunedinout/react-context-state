import React from 'react';
import { Consumer } from './provider'

const singleArgumentError = "function must be named 'mapStateToProps' or 'mapActionsToProps'";
const doubleArgumentError = "functions must be named 'mapStateToProps' and 'mapActionsToProps";

function renderConsumer(mapStateToProps, mapActionsToProps, ReactComponent) {
    return class extends React.Component {
        render() {

            return (
                <Consumer>
                    {(allProps) => {
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
function handleConnectArgError(message) {
    console.error(message)
    try {
        throw new Error(message)
    }
    catch (e) {
        //breakpoint at error
    }
}

export function connect(func1, func2) {

    if (arguments.length === 1) {
        if (func1.name === 'mapStateToProps')
            return (ReactComponent) => renderConsumer(func1, () => { }, ReactComponent);
        else if (func1.name === 'mapActionsToProps')
            return (ReactComponent) => renderConsumer(() => { }, func1, ReactComponent)
        else
            handleConnectArgError(singleArgumentError);
    }

    if (arguments.length === 2) {
        if (func1.name === 'mapStateToProps' && func2.name === 'mapActionsToProps')
            return (ReactComponent) => renderConsumer(func1, func2, ReactComponent)
        else
            handleConnectArgError(doubleArgumentError);

    }
}