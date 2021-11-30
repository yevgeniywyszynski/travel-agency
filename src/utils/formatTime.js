export const formatTime = (countdown) => {
;
    if(!countdown){
        return null
    } else if (isNaN(countdown)){
        return null
    } else if (countdown < 0){
        return null
    } 

    let seconds = Math.floor(countdown%60);
    let minutes = Math.floor((countdown/60)%60);
    let hours = Math.floor((countdown/3600));

    if(seconds < 10) {seconds = '0' + seconds}
    if(minutes < 10) {minutes = '0' + minutes}
    if(hours < 10) {hours = '0' + hours}

    return (hours + ':' + minutes + ':' + seconds);
}

/*
false values:
- null
- undefined
- ''
- false
- 0
- NaN
*/
/*
16%3 => 1
*/