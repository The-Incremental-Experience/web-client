import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ChatBox from "./components/ChatBox";
import InputBox from "./components/InputBox";
import MessageManager from "./kernel/messageManager";
import MessageModel from "./models/MessageModel";
import MessageBox from "./components/MessageBox";
import MessageType from "./models/constants";

const messageManger = new MessageManager();

function App() {
  // state for react-like re-rendering
  const [messages, setMessages] = useState(
    messageManger.getDisplayableMessages()
  );

  const handleSubmit = (text) => {
    // dirty hack to trigger re-render in ChatBox due to prop change
    const newMessages = messages.map((message) => message);
    newMessages.push(
      new MessageModel({ text: text, type: MessageType.Question })
    );
    setMessages(newMessages);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Psy-Q Bot</p>
        <ChatBox>
          {messages.map((message, index) => (
            <MessageBox key={`MessageBox${index}`} message={message} />
          ))}
        </ChatBox>
        <InputBox onSubmit={handleSubmit} />
        <a
          className="App-link"
          href="https://github.com/The-Incremental-Experience/web-client"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git Repo
        </a>
      </header>
    </div>
  );
}

export default App;
