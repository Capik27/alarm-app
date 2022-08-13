import { useState, useEffect } from "react";
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
  const [time, setTime] = useState(props.initialTime);
  const period = 1000;

  useEffect(() => {
    if (props.timerWorking) {
      document.title = getConvertedTime(time);
      if (time === 0) {
        props.activateAlarm();
        return;
      }
      const id = setTimeout(() => {
        setTime((prevTime) => {
          return prevTime - 1;
        });
      }, period);
      return () => {
        clearTimeout(id);
      };
    }
  }, [time]);

  return <span className="timer">{getConvertedTime(time)}</span>;
}
