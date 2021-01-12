import React from 'react';
import './Caculator.scss';

function Caculator(props) {
    const Total = props.a + props.b;
    return(
        <div>
            <label>Tong cua {props.a} va {props.b} la : {Total}</label>
        </div>
    )
}

export default Caculator;