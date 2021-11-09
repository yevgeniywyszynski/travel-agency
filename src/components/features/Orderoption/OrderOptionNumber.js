import React from 'react';
import styles from './OrderOption.module.scss';


const OrderOptionNumber = ({currentValue, limits, setOptionValue, price}) => (
    <div className={styles.number}>
        <input 
            type="number" 
            className={styles.inputSmall} 
            value={currentValue} 
            min={limits.min}
            max={limits.max}
            onChange={event => setOptionValue(event.currentTarget.value)}
            >   
            </input>
            <span> Price: {price}</span>
    </div>
)

export default OrderOptionNumber;