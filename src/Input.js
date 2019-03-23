import React from 'react';
import './main.css'

const Input = (props) => {
    return (
        <div>
            <form onClick={props.onClick}>
                <input 
                    value={props.value} 
                    type='text' 
                    placeholder="Enter a task" 
                    onChange={props.onChange}>
                </input>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default Input; 