import Button from "./Button.js";
import Alert from "./Alert.js";

export default function Controls(props) {
  return (
    <div className="form_flex-row">
      {!props.timerWorking && !props.alertActivated && (
        <>
          <Button
            text={"Start"}
            type={"submit"}
            handler={props.handleSubmit}
            dis={props.inputValue == 0}
          />
          <Button
            text={"Clear"}
            type={"button"}
            handler={props.handleReset}
            dis={props.inputValue == 0}
          />
        </>
      )}
      {props.timerWorking && !props.alertActivated && (
        <Button
          text={"Reset Timer"}
          type={"button"}
          handler={props.handleResetTimer}
        />
      )}
      {props.alertActivated && (
        <>
          <Button
            text={"Turn Off"}
            type={"button"}
            handler={props.handleResetSound}
          />
          <Alert />
        </>
      )}
    </div>
  );
}
