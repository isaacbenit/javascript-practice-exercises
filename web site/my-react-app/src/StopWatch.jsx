import React,{useState, useEffect,useRef} from "react"
function StopWatch(){
    const [isRunning, setIsRunning]=useState(false);
    const [elapsedTime,setElapseTime]=useState(0);
    const intervalidRef = useRef(null);
    const startTimeRef= useRef(0);
    useEffect(()=>{
        if(isRunning ){
            intervalidRef.current= setInterval(() => {
                setElapseTime(Date.now()-startTimeRef.current);
            }, 10);
        }
        return(()=>{
            clearInterval(intervalidRef.current)
        })
    },[isRunning])
    function start(){
        setIsRunning(true);
        startTimeRef.current= Date.now()-elapsedTime
        
    }
    function stop(){
        setIsRunning(false);
    }
    function reset(){
        setElapseTime(0)
        setIsRunning(false)
    }
    function formatTime(){
        let hours= Math.floor(elapsedTime /(1000* 60* 60));
        let minutes=Math.floor(elapsedTime /(1000* 60) % 60);
        let seconds=Math.floor(elapsedTime /(1000)%60);
        let milliseconds = Math.floor((elapsedTime % 1000)/10);
        hours= String(hours).padStart(2,"0");
        minutes= String(minutes).padStart(2,"0");
        seconds= String(seconds).padStart(2,"0");
        milliseconds= String(milliseconds).padStart(2,"0");
        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

   return( 
            <div className="body">
                <div className="stopwatch">
                    <div className="display">{formatTime()}</div>
                    <div className="contorls">
                        <button className="start-Button" onClick={start}>Start</button>
                        <button className="stop-Button" onClick={stop}>Stop</button>
                        <button className="rest-Button" onClick={reset}>Rest</button>
                    </div>
                </div>
            </div>
   )
}
export default StopWatch