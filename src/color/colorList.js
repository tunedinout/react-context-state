import React from 'react';
import Color from './color';
import './color.css'
import { Consume } from '../context/globalContext';

function ColorList(props) {


    return (
        <div className="color-list">
            {
                props.colors.map((color) => <Color value={color} />)
            }
        </div>

    );
}
const mapStateToProps = (state) => ({
    colors: state.colors,
})
const mapActionsToProps = () => { }
export default Consume(mapStateToProps, mapActionsToProps, ColorList);