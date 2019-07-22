import React from 'react';
import './calculator.css';

const Calculator = (props) => (
    <div className="calculator" onClick={props.clicked}>
	{props.label}
    </div>
);

export default Calculator;