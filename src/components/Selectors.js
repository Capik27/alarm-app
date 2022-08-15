export function Selectors(props) {
  return (
    <div className="form_flex-row">
      <SelectTime
        limit={24}
        value={props.hour}
        disabled={props.disabled}
        handler={props.setHour}
      />
      <SelectTime
        limit={60}
        value={props.minute}
        disabled={props.disabled}
        handler={props.setMinute}
      />
      <SelectTime
        limit={60}
        value={props.second}
        disabled={props.disabled}
        handler={props.setSecond}
      />
    </div>
  );
}

export function SelectTime(props) {
  const limit = props.limit;

  let optlist = [];
  for (let i = 0; i < limit; i++) {
    let insert = i > 9 ? i : `0${i}`;
    optlist.push(
      <option value={i} key={i}>
        {insert}
      </option>
    );
  }

  const handleValueChange = (e) => {
    props.handler(Number(e.target.value));
  };

  return (
    <select
      className="form_select"
      onChange={handleValueChange}
      disabled={props.disabled}
      value={props.value}
    >
      {optlist}
    </select>
  );
}
