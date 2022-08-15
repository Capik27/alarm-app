import { useState, useEffect } from "react";
import { differenceInSeconds } from "date-fns";
import "../style/Timer.css";

export function getConvertedTime(seconds) {
  let xh = Math.trunc(seconds / 3600);
  const hour = xh > 9 ? xh : `0${xh}`;
  let xm = Math.trunc((seconds % 3600) / 60);
  const min = xm > 9 ? xm : `0${xm}`;
  let xs = seconds % 60;
  const sec = xs > 9 ? xs : `0${xs}`;
  return `${hour}:${min}:${sec}`;
}

export function StaticTimer(props) {
  return <span className="timer">{getConvertedTime(props.time)}</span>;
}

export function CountdownTimer(props) {
  const [isTick, setIsTick] = useState(false);
  const [time, setTime] = useState(props.initialTimeSeconds);
  const period = 500;

  useEffect(() => {
    if (props.timerWorking) {
      document.title = getConvertedTime(time);
      //Date check
      const date = new Date();
      const trueTime = differenceInSeconds(date, props.startdate);
      const currensy = props.initialTimeSeconds - time;
      if (trueTime > currensy) {
        console.log("datesec:", trueTime, "time:", currensy);
        setTime((prevTime) => {
          const result = prevTime - (trueTime - currensy);
          return result >= 0 ? result : 0;
        });
      }
      //
      if (time === 0) {
        props.activateAlarm();
        return;
      }
      const id = setTimeout(() => {
        if (isTick) {
          setTime((prevTime) => {
            return prevTime - 1;
          });
          setIsTick(false);
        } else {
          setIsTick(true);
        }
      }, period);
      return () => {
        clearTimeout(id);
      };
    }
  }, [time, isTick, props]);

  return <span className="timer">{getConvertedTime(time)}</span>;
}
