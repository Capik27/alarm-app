import { useState } from "react";
import { CountdownTimer, StaticTimer, getConvertedTime } from "./Timer.js";
import Controls from "./Controls.js";
import "../style/Form.css";

export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const [timerWorking, setTimerWorking] = useState(false);
  const [alertActivated, setAlertActivated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimerWorking(true);
  };

  const handleClickReset = () => {
    setInputValue("");
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

  const handleInputValueChange = (e) => {
    e.target.value < 0 ? setInputValue(0) : setInputValue(e.target.value);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form_input"
          placeholder="Seconds"
          type="number"
          value={inputValue}
          onChange={handleInputValueChange}
          disabled={timerWorking || alertActivated}
        />
        <Controls
          inputValue={inputValue}
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
          initialTime={inputValue}
          activateAlarm={handleTurnOnAlarm}
          timerWorking={timerWorking}
        />
      ) : (
        <StaticTimer time={inputValue} />
      )}
    </>
  );
}
