import React from 'react';
import { formatTime } from '../../../utils/formatTime';
import styles from './HappyHourAd.module.scss';

class HappyHour extends React.Component {
  constructor(){
    super();

    setInterval( () => (
      this.forceUpdate()
    ), 1000)
  }
  getCountdownTime(){
    const date = new Date();
    let currentDate = date.getTime();
    const curDay = date.getUTCDate();
    const curMonth = date.getUTCMonth();
    const curYear = date.getUTCFullYear();
    
    const nextNoon = new Date(Date.UTC(curYear, curMonth, curDay, 12, 0,0,0));

    if(date.getUTCHours() >= 12){
      nextNoon.setUTCDate(date.getUTCDate() + 1);
    }
    return Math.round((nextNoon.getTime() - currentDate)/1000)
  }
  render() {
    let {title, description} = this.props;
    const countdown = this.getCountdownTime();
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.description}>{countdown > 23 * 60 * 60 ? description : formatTime(countdown)}</div>
      </div>
    )
  }
}

export default HappyHour;