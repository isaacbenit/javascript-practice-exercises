function formatDuration (seconds) {
   if(seconds===0){
    return 'now';
   }
   if(seconds<3600){
    let minutes=(seconds/60).toFixed(0)
    seconds=seconds%60
    return `${minutes} minutes  ${seconds} seconds`
   }
 
  }
  console.log(formatDuration(62))