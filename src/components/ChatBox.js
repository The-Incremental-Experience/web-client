import "../Chat.css"
import {Box} from "@mui/material";

function ChatBox(props) {
  return <Box className={"ChatBox"}>{props.children}</Box>;
}

export default ChatBox;
