import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ChatBox from "./components/ChatBox";
import InputBox from "./components/InputBox";
import MessageManager from "./kernel/messageManager";
import MessageModel from "./models/MessageModel";
import MessageBox from "./components/MessageBox";

const messageManger = new MessageManager();

function App() {
  // state for react-like re-rendering
  const [messages, setMessages] = useState(
    messageManger.getDisplayableMessages()
  );

  /** Dirty hack to trigger re-render of messages */
  const dirtySetMessagesHack = (messages: MessageModel[]) => {
    const newMessages = messages.map((message) => message);
    setMessages(newMessages);
  };

  const handleSubmit = async (text) => {
    await messageManger.pushQuestion(text);
    dirtySetMessagesHack(messageManger.getDisplayableMessages());
    await messageManger.requestAnswer(text);
    dirtySetMessagesHack(messageManger.getDisplayableMessages());
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
