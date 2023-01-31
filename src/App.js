import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ChatBox from "./components/ChatBox";
import InputBox from "./components/InputBox";
import MessageManager from "./kernel/messageManager";

const messageManger = new MessageManager();

function App() {
  // state for react-like re-rendering
  const [messages, setMessages] = useState(
    messageManger.getDisplayableMessages()
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Psy-Q Bot</p>
        <ChatBox messages={messages} />
        <InputBox />
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
