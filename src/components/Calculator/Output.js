import React from 'react';

import './Output.css';

const Output = (props) => (
    <div className="output">
	Current Counter: {props.value}
    </div>
);

export default Output;