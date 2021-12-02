import React from 'react';
import styles from './DaysToSummer.module.scss';
import PropTypes from 'prop-types';

class DaysToSummer extends React.Component {
    getSummerDays(){
        let date = new Date();
        let dateTimestamp = date.getTime()
        let summerStart = new Date(date.getFullYear(), 5, 21)
        console.log(`before ${summerStart}`)
        if(date.getMonth() > 5){
            summerStart.setFullYear(date.getFullYear() + 1)
        } 
        console.log(`after ${summerStart}`)
        let summerStartTimestamp = summerStart.getTime()
        let diference = summerStartTimestamp - dateTimestamp;
        return Math.floor(diference/(1000*60*60*24))
    }

    render() {
        const daysToSummer = this.getSummerDays();
        return (
            <div className={styles.component}>
                <h3 className={styles.title} >{daysToSummer < 273 ? `${daysToSummer} days to summer` : ''}</h3>
            </div>
        )
    }
}

export default DaysToSummer;