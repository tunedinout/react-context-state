import React from 'react';
import Item from './item';
import './item.css'
import { connect } from '../context/connect';


class ItemList extends React.Component {

    render() {

        console.log(this.props);
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
export default connect(mapStateToProps)(ItemList);