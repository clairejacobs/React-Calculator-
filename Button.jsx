import React from 'react';
import './Button.css';

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}

export const Button = props => 
    <div className= {`button-wrapper ${
       isOperator(props.children) ? null : "operater"
    }`}

    onClick= {() => props.handleClick(props.children)}
  >
  {props.children}
  </div>
    
export default Button;