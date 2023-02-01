import { Box } from "@mui/material";
import "../App.css";
import MessageType from "../models/constants";

function MessageBox(props) {
  const isQuestion = () => {
    return MessageType.Question === props.message.type;
  };

  return (
    <Box className={"MessageBox"} sx={{ border: 1 }}>
      <div className={isQuestion() ? "QuestionText" : "AnswerText"}>
        {props.message.text}
      </div>
      {!isQuestion() && props.message.sources ? (
        <div>
          {"Sources for further reading:"}
          {props.message.sources.map((source, index) => (
            <div className={"AnswerSource"} key={`AnswerSource${index}`}>
              {source}
            </div>
          ))}
        </div>
      ) : null}
    </Box>
  );
}

export default MessageBox;
