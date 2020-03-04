import React from 'react';
import './form.css'
import { GlobalContext, Consumer } from '../context/globalContext';

class Form extends React.Component {
//    const {setColors,setItems} = useContext(GlobalContext);
    state = {
        inputValue : '',
        setInputValue: (newValue) => {
            this.setState({inputValue: newValue});
        }
    }
    render(){
            const {inputValue,setInputValue} = this.state;
            const {setItems,setColors} = this.context;
            
        return (
            <div className="data-form">

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
        </div>
        )
    }
   
}
Form.contextType = GlobalContext;
export default Form;