import React from 'react';
import classes from './Input.css';
const Input = props => {
    return (
        <div>
             <input type="text" placeholder="Final score" className={classes.FinalScore}></input>
        </div>
    );
}
export default Input;