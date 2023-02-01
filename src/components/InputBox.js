import "../InputBox.css";
import { useState } from "react";

function InputBox(props) {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (!props.isActive) {
      // console.log("please wait for response");
      return;
    }
    if (event.keyCode === 13 && value.length > 0) {
      props.onSubmit(value);
      setValue("");
    }
  };

  return (
    <input
      className={"InputBox"}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}

export default InputBox;
