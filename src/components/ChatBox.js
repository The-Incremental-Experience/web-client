import "../Chat.css";
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import MessageBox from "./MessageBox";

function ChatBox({ messages }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box className={"ChatBox"}>
      {messages.slice(0, -1).map((message, index) => (
        <MessageBox key={`MessageBox${index}`} message={message} />
      ))}
      <div ref={messagesEndRef} />
      <MessageBox
        key={`MessageBox${messages.length - 1}`}
        message={messages[messages.length - 1]}
      />
    </Box>
  );
}

export default ChatBox;
