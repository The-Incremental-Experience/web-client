import "../Chat.css";
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";

function ChatBox(props) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [props.children]);

  return (
    <Box className={"ChatBox"}>
      {props.children}
      <div ref={messagesEndRef} />
    </Box>
  );
}

export default ChatBox;
