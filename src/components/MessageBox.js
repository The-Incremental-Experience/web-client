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
        <div className={"Sources"}>
          {"Sources for further reading:"}
          {props.message.sources.map((source, index) => (
            <div>
              <a
                key={`AnswerSource${index}`}
                href={"https://google.com/search?q=" + source}
                target="_blank"
                rel="noopener noreferrer"
              >
                {source}
              </a>
            </div>
          ))}
        </div>
      ) : null}
    </Box>
  );
}

export default MessageBox;
