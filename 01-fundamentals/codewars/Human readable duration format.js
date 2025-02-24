function formatDuration (seconds) {
   if(seconds===0){
    return 'now';
   }
   if(seconds<3600){
    let minutes=(seconds/60).toFixed(0)
    seconds=seconds%60
    if(minutes<1 && seconds==1){
        return `${seconds} second` 
    }
    if(minutes<1){
        return `${seconds} seconds` 
    }
    if(minutes==1 && seconds==1){
       return `${minutes} minute  and ${seconds} second`
    }
    if(minutes>1 && seconds==0){
        return `${minutes} minutes`
    }
    if(minutes==1 && seconds>1){
        return `${minutes} minute and ${seconds} seconds`
    }
    if(minutes>1 && seconds==0){
        return `${minutes} minutes`
    }
    return minutes===1?`${minutes} minute  ${seconds} seconds` :`${minutes} minutes  ${seconds} seconds`
   }
   if(seconds>=3600){
    let hours=(seconds/3600).toFixed(0)
    seconds=seconds%3600
    let minutes=(seconds/60).toFixed(0)
    seconds=seconds%60
    // console.log(hours==1)
    if(hours==1 && minutes==1 && seconds==1){
        return `${hours} hour, ${minutes} minute and ${seconds} second`
    }
    if(hours==1 && minutes==1 && seconds>1){
        return `${hours} hour, ${minutes} minute and ${seconds} seconds`
    }
    if(minutes==1 && seconds==1 && hours>1){
        return `${hours} hours, ${minutes} minute and ${seconds} second`
    }
    if(hours>1 && minutes==1 && seconds>1){
        return `${hours} hours, ${minutes} minute and ${seconds} seconds`
    }
    if(hours>1 && minutes>1 && seconds==1){
        return `${hours} hours, ${minutes} minutes and ${seconds} second`
    }
    if(hours==1 && seconds==0 && minutes == 0){
        return `${hours} hour`
    }
    else{
        return `${hours} hours, ${minutes} minutes and  ${seconds} seconds`
    }

 
  }
}
  console.log(formatDuration(12890))