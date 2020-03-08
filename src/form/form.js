import React, { useContext, useState } from 'react';
import './form.css'
import { GlobalContext, Consumer } from '../context/globalContext';

function Form() {
//    const {setColors,setItems} = useContext(GlobalContext);
   const [inputValue,setInputValue] = useState('');
    return (
        <Consumer>
       {({setColors,setItems})=>( <div className="data-form">

            <input type='text' value={ inputValue } onChange={(e)=>setInputValue(e.target.value)}  />
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
        </div>)}
        </Consumer>
    )
}

console.log(Form.prototype);
export default Form;