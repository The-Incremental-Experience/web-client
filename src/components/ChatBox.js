import MessageBox from "./MessageBox";

function ChatBox(props) {
  console.log(props);
  return (
    <div className={"ChatBox"}>
      {props.messages.map((message) => (
        <MessageBox message={message} />
      ))}
    </div>
  );
}

export default ChatBox;
