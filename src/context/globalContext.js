import React from 'react';

export const GlobalContext = React.createContext();

export const Provider = GlobalContext.Provider;
export const ProviderNew = function (props) {

    return( 
            <div>
                 <Provider value={props.store}>
                    {props.children} 
                </Provider>
            </div>
           
        )
}

export const connect =  function(mapStateToProps,mapDispatchToProps){
    //pass the global state here and inject prop variables
    // map state to props returns an object containing global state variables
    const propVariable = mapStateToProps();
    //pass the global dispatch
    // map dispatch to props return an object containing global state actions/functions
    const propFunctions = mapDispatchToProps();
    const obj = {propFunctions,propVariable};
    //bind the function to this object
    withConsumer = withConsumer.bind(obj);
    return withConsumer;
}

function withConsumer(ReactComponent) {
    return class extends React.Component{
        render(){
            const props = this.props;
            const propV = propVariable;
            return (
                <ReactComponent {...props} {...propV}  />
            )
        }
    }
}


export const Consumer = GlobalContext.Consumer;

