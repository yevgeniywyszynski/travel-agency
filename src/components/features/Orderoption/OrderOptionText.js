import React from 'react';
import styles from './OrderOption.module.scss';

const OrderOptionText = ({setOptionValue}) => {
    return (
        <div>
            <label>
                <input 
                type="text"
                onChange={event => setOptionValue(event.currentTarget.value)}
                >
                </input>
            </label>
        </div>
    )
}

export default OrderOptionText;