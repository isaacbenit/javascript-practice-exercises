function formatDuration (seconds) {
   if(seconds===0){
    return 'now';
   }
   if(seconds<3600){
    let minutes=Math.floor(seconds/60)
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
   if(seconds>=3600 && seconds<86400){
    let hours=Math.floor(seconds/3600)
    seconds=seconds%3600
    let minutes=Math.floor(seconds/60)
    seconds=seconds%60
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
        return `${hours} hours, ${minutes} minutes and ${seconds} seconds`
    }

 
  }
   if(seconds>=86400 && seconds<31536000){
    let days=Math.floor(seconds/86400)
    seconds=seconds%86400
    let hours=Math.floor(seconds/3600)
    seconds=seconds%3600
    let minutes=Math.floor(seconds/60)
    seconds=seconds%60
    if(days==1){
        days=`${days} day`
    }
    else{
        days=`${days} days`
    }
    if(hours==1 && minutes==1 && seconds==1){
        return `${days}, ${hours} hour, ${minutes} minute and ${seconds} second`
    }
    if(hours==1 && minutes==1 && seconds>1){
        return `${days}, ${hours} hour, ${minutes} minute and ${seconds} seconds`
    }
    if(hours==1 && minutes>1 && seconds==0){
        return `${days}, ${hours} hour, ${minutes} minutes`
    }
    if(minutes==1 && seconds==1 && hours>1){
        return `${days}, ${hours} hours, ${minutes} minute and ${seconds} second`
    }
    if(hours>1 && minutes==1 && seconds>1){
        return `${days}, ${hours} hours, ${minutes} minute and ${seconds} seconds`
    }
    if(hours>1 && minutes>1 && seconds==1){
        return `${days}, ${hours} hours, ${minutes} minutes and ${seconds} second`
    }
    if(hours==1 && seconds==0 && minutes == 0){
        return `${days} ${hours} hour`
    }
    if(hours==1 && minutes>1 && seconds>1 ){
        return `${days}, ${hours} hour, ${minutes} minutes and ${seconds} seconds`
    }
    if(hours==0 && minutes>1 && seconds>1){
        return `${days}, ${minutes} minutes and ${seconds} seconds`
    }
    if(hours>1 && minutes==0 && seconds>1){
        return `${days}, ${hours} hours and ${seconds} seconds`
    }
    if(hours>1 && minutes>1 && seconds==0){
        return `${days}, ${hours} hours and ${minutes} minutes`
    }
    else{
        return `${days}, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
    }
  }
  if(seconds>=31536000){
    let years=Math.floor(seconds/31536000)
    seconds=seconds%31536000
    let days=Math.floor(seconds/86400)
    seconds=seconds%86400
    let hours=Math.floor(seconds/3600)
    seconds=seconds%3600
    let minutes=Math.floor(seconds/60)
    seconds=seconds%60
    if(years==1){
        years=`${years} year`
    }
    else{
        years=`${years} years`
    }
    if(days==1){
        days=`${days} day`
    }
    else{
        days=`${days} days`
    }
    if(hours==1 && minutes==1 && seconds==1){
        return `${years}, ${days}, ${hours} hour, ${minutes} minute and ${seconds} second`
    }
    if(hours==1 && minutes==1 && seconds>1){
        return `${years}, ${days}, ${hours} hour, ${minutes} minute and ${seconds} seconds`
    }
    if(minutes==1 && seconds==1 && hours>1){
        return `${years}, ${days}, ${hours} hours, ${minutes} minute and ${seconds} second`
    }
    if(hours>1 && minutes==1 && seconds>1){
        return `${years}, ${days}, ${hours} hours, ${minutes} minute and ${seconds} seconds`
    }
    if(hours>1 && minutes>1 && seconds==1){
        return `${years}, ${days}, ${hours} hours, ${minutes} minutes and ${seconds} second`
    }
    if(hours==1 && seconds==0 && minutes == 0){
        return `${years}, ${days}, ${hours} hour`
    }
    if(hours>1 && minutes>1 && seconds==0){
        return`${years}, ${days}, ${hours} hours and ${minutes} minutes`
    }
    if(hours==1 && minutes>1 && seconds>1){
        return `${years}, ${days}, ${hours} hour, ${minutes} minutes and ${seconds} seconds`
    }
    if(hours >1 && minutes==0 && seconds>1){
        return `${years}, ${days}, ${hours} hours, and ${seconds} seconds`
    }
    else{
        return `${years}, ${days}, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
    }
  }
}
  console.log(formatDuration(600840))