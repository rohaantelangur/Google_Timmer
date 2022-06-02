import React, { useEffect, useRef, useState } from 'react'
import Styles from "./Main.module.css"

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [stop, setStop] = useState("enable")


    const timerid = useRef(null)

    const timestart = () => {
        if(!timerid.current){
            setStop("disable")
        let id = setInterval(() => (
            setTime((time) => time + 1)
        ),17);

        timerid.current=id
        }
    }

    useEffect(() => {
        setSec(Math.floor(time/60));
    },[time])

    useEffect(() => {
        setMin(Math.floor(sec/60));
    },[sec])

    const resetbut = () => {
        setStop("enable")
        setTime(0);
        setSec(0);
        clearInterval(timerid.current)
        timerid.current=null
    }

    const tstop = () => {
        setStop("enable")
        clearInterval(timerid.current)
        timerid.current=null
    }
  return (
    <div>

            <p>Stopwatch:</p>
        <div className={Styles.time1}>
            <span className={Styles.timesec1}>{min%60}</span>
            <span className={Styles.timesec1}>{`: ${sec%60}`}</span>
            <span className={Styles.timeselast}>{`: ${time%60}`}</span>
        </div>
        

        <div className={Styles.button1}>


        <button className={Styles.timer_Button1} disabled={stop === "disable" ? true : false} onClick={() => {timestart()}}>Start</button>

        <button className={Styles.timer_Button1} disabled={stop === "enable" ? true : false} onClick={() => {tstop()}}>Stop</button>

        <button className={Styles.timer_Button1} onClick={() => {resetbut()}}>Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch