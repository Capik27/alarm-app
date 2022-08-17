import { Button } from "antd";
import Alert from "./Alert.js";

export default function Controls(props) {
  return (
    <>
      {!props.timerWorking && !props.alertActivated && (
        <Button
          onClick={props.handleSubmit}
          disabled={props.inputValue === 0}
          size="large"
        >
          Start
        </Button>
      )}
      {props.timerWorking && !props.alertActivated && (
        <Button onClick={props.handleResetTimer} size="large">
          Reset
        </Button>
      )}
      {props.alertActivated && (
        <>
          <Button onClick={props.handleResetSound} size="large">
            Turn Off
          </Button>
          <Alert />
        </>
      )}
    </>
  );
}
