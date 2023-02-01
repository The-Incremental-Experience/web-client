import { Box } from "@mui/material";
import "../Message.css";
import MessageType from "../models/constants";

function MessageBox(props) {
  const isQuestion = () => {
    return MessageType.Question === props.message.type;
  };

  return (
    <Box className={"MessageBox " + (isQuestion() ? "Question" : "Answer")}>
      <div>{props.message.text}</div>
      {!isQuestion() && props.message.sources ? (
        <div>
          {"Sources for further reading:"}
          {props.message.sources.map((source, index) => (
            <div key={`AnswerSource${index}`}>{source}</div>
          ))}
        </div>
      ) : null}
    </Box>
  );
}

export default MessageBox;
