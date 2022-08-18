import { useState } from "react";
import { CountdownTimer, StaticTimer } from "./Timer.js";
import Controls from "./Controls.js";
import Alert from "./Alert.js";
import { getSeconds, getMinutes, getHours } from "date-fns";
import { TimePicker } from "antd";
import "antd/dist/antd.css";
import "../style/Form.css";

export default function Form() {
  const [timeDateValue, setTimeDateValue] = useState(null);
  const [timerWorking, setTimerWorking] = useState(false);
  const [alertActivated, setAlertActivated] = useState(false);

  const getTimeFromDateObj = (obj) => {
    if (obj === null) return 0;
    const date = obj._d;
    return getHours(date) * 3600 + getMinutes(date) * 60 + getSeconds(date);
  };

  const handlerSetTimeDateValue = (time) => {
    setTimeDateValue(time);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimerWorking(true);
  };

  const handleClickResetTimer = () => {
    setTimerWorking(false);
  };

  const handleClickResetSound = () => {
    setAlertActivated(false);
    handleClickResetTimer();
  };

  const handleTurnOnAlarm = () => {
    setAlertActivated(true);
  };

  return (
    <>
      <form className="form">
        <div className="form_flex-row">
          <div className="form_time-select">
            <TimePicker
              value={timeDateValue}
              onChange={handlerSetTimeDateValue}
              disabled={timerWorking || alertActivated}
              size="large"
            />
          </div>
          <Controls
            inputValue={getTimeFromDateObj(timeDateValue)}
            timerWorking={timerWorking}
            alertActivated={alertActivated}
            handleSubmit={handleSubmit}
            handleResetTimer={handleClickResetTimer}
            handleResetSound={handleClickResetSound}
          />
        </div>
      </form>
      <Alert isPlaying={alertActivated} />
      {timerWorking ? (
        <CountdownTimer
          initialTimeSeconds={getTimeFromDateObj(timeDateValue)}
          activateAlarm={handleTurnOnAlarm}
          startdate={new Date()}
          timerWorking={timerWorking}
        />
      ) : (
        <StaticTimer time={getTimeFromDateObj(timeDateValue)} />
      )}
    </>
  );
}
