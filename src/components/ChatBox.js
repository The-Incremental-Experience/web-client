import MessageBox from "./MessageBox";

function ChatBox(props) {
  return (
    <div className={"ChatBox"}>
      {props.messages.map((message, index) => (
        <MessageBox key={`MessageBox${index}`} message={message} />
      ))}
    </div>
  );
}

export default ChatBox;
