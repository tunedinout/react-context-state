import React, { useState } from 'react';
import { connect } from '../context/connect';
import './form.css'


function Form(props) {
    //    const {setColors,setItems} = useContext(GlobalContext);
    const [inputValue, setInputValue] = useState('');
    const { setColors, setItems } = props;
    return (
        <div className="data-form">

            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button
                className="submit-btn"
                type='submit'
                onClick={() => {
                    setItems(inputValue);
                    setInputValue('');
                }} > Add Item </button>
            <button
                className="submit-btn_color"
                type='submit'
                onClick={() => {
                    setColors(inputValue);
                    setInputValue('');
                }} > Add Color </button>
        </div>
    )
}

const mapActionsToProps = (state) => ({
    setItems: state.setItems,
    setColors: state.setColors,
})
export default connect(mapActionsToProps)(Form);