import React from 'react';
import classes from './Button.css';
const Button = props => {
    return (
        <button className={props.BtnType}>
            <i className={props.iconType}></i>
            {props.nameBtn}
        </button>
    );
}
export default Button;