import { Box } from "@mui/material";
import "../App.css";
import MessageType from "../models/constants";

function MessageBox(props) {
  const isQuestion = () => {
    return MessageType.Question === props.message.type;
  };

  return (
    <Box className={"MessageBox"} sx={{ border: 1 }}>
      <div
        className={"MessageText"}
        style={{ color: isQuestion() ? "white" : "gray" }}
      >
        {props.message.text}
      </div>
    </Box>
  );
}

export default MessageBox;
