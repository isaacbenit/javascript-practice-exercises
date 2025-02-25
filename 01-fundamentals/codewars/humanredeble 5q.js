function humanReadable (seconds) {
    if(seconds===0){
     return `00:00:00`;
    }
    if(seconds<60 && seconds>10){
        return `00:00:${seconds}`
    }
    if(seconds<10 && seconds<10){
         return `00:00:0${seconds}`
    }
    if(seconds<3600 && seconds>=60){
     let minutes=Math.floor(seconds/60)
     seconds=seconds%60
    if(minutes<10 && seconds>10){
       return `00:0${minutes}:${seconds}`
    }
    if(seconds<10 && minutes>10){
        return `00:${minutes}:0${seconds}`
     }

     return minutes<10 && seconds<10?`00:0${minutes}:0${seconds}` :`00:${minutes}:${seconds}`
    }
    if(seconds>=3600){
     let hours=(seconds/3600).toFixed(0)
     seconds=seconds%3600
     let minutes=(seconds/60).toFixed(0)
     seconds=seconds%60
     if(hours<10 && minutes<10 && seconds<10){
         return `0${hours}:0${minutes}:0${seconds}`
     }
     if(hours>10 && minutes<10 && seconds>=10){
        return `${hours}:0${minutes}:${seconds}`
    }
     if(hours<10 && minutes<10 && seconds>10){
        return `0${hours}:0${minutes}:${seconds}`
     }
     if(hours<10 && minutes>10 && seconds>10){
         return `0${hours}:${minutes}:${seconds}`
     }
     if(hours>10 && minutes>10 && seconds<10){
         return `${hours}:${minutes}:0${seconds}`
     }
    if(hours<10 && minutes>10 && seconds<10){
        return `0${hours}:${minutes}:0${seconds}`
    }
    if(hours>10 && minutes<10 && seconds<10){
        return `${hours}:0${minutes}:0${seconds}`
    }
     else{
        return `${hours}:${minutes}:${seconds}`
       }
   }
  
}
   console.log(humanReadable(230410))