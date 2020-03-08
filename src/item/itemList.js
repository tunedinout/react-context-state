import React from 'react';
import Item from './item';
import './item.css'
import { Consume } from '../context/globalContext';


class ItemList extends React.Component {

    render() {

        const { items } = this.props;
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


const mapStateToProps = (state) => ({
    items: state.items
})
const mapActionsToProps = (state) => ({
    setItems: state.setItems
})
export default Consume(mapStateToProps, mapActionsToProps, ItemList);