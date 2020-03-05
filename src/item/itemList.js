import React from 'react';
import Item from './item';
import './item.css'
import { GlobalContext, Consumer } from '../context/globalContext';


class ItemList extends React.Component {
   static contextType = GlobalContext;

    render(){
        //can even get the setters for the state variable
        let state = this.context;
        const { items } = state;
        
        return (
           
                 <div className="item-list">
                    <ul >
                    {items.map((item) => {
                        return <Item value={item} />
                    })}
                    </ul>
                </div>
        )
    }
}

export default ItemList;