import React, { useContext } from 'react';
import Color from './color';
import './color.css'
import { GlobalContext } from '../context/globalContext';

function ColorList(props) {
    const { colors } = useContext(GlobalContext);
   
    return (
        <div className="color-list">
            {
                colors.map((color) => <Color value={color} />)
            }
        </div>

    );
}
export default ColorList;