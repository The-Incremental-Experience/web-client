import { TextField } from "@mui/material";
import { useState } from "react";

function InputBox(props) {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      props.onSubmit(value);
      setValue("");
    }
  };

  return (
    <div className={"InputBox"}>
      <TextField
        maxRows={4}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        variant="outlined"
      />
    </div>
  );
}

export default InputBox;
