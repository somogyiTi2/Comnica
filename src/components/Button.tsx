import React from 'react';
import { ButtonProps } from '../types/ButtonProps';
import style from "../style/Button.module.css"

const Button: React.FC<ButtonProps> = ({ buttonHandler, buttonText }) => {
    return (
        <button className={style.button} onClick={buttonHandler}>{buttonText}</button>
    );
}

export default Button;
