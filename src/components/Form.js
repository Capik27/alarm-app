import { useState } from "react";
import { CountdownTimer, StaticTimer, getConvertedTime } from "./Timer.js";
import Controls from "./Controls.js";
import { Selectors } from "./Selectors.js";
import "../style/Form.css";

export default function Form() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [timerWorking, setTimerWorking] = useState(false);
  const [alertActivated, setAlertActivated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimerWorking(true);
  };

  const handleClickReset = () => {
    setHour(0);
    setMinute(0);
    setSecond(0);
  };

  const handleClickResetTimer = () => {
    setTimerWorking(false);
    document.title = getConvertedTime(0);
  };

  const handleClickResetSound = () => {
    setAlertActivated(false);
    handleClickResetTimer();
  };

  const handleTurnOnAlarm = () => {
    setAlertActivated(true);
  };

  const getSumTime = () => {
    return hour * 3600 + minute * 60 + second;
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <Selectors
          disabled={timerWorking || alertActivated}
          hour={hour}
          minute={minute}
          second={second}
          setHour={setHour}
          setMinute={setMinute}
          setSecond={setSecond}
        />
        <Controls
          inputValue={getSumTime()}
          timerWorking={timerWorking}
          alertActivated={alertActivated}
          handleSubmit={handleSubmit}
          handleReset={handleClickReset}
          handleResetTimer={handleClickResetTimer}
          handleResetSound={handleClickResetSound}
        />
      </form>
      {timerWorking ? (
        <CountdownTimer
          initialTimeSeconds={getSumTime()}
          activateAlarm={handleTurnOnAlarm}
          timerWorking={timerWorking}
        />
      ) : (
        <StaticTimer time={getSumTime()} />
      )}
    </>
  );
}
