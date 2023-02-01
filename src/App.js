import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ChatBox from "./components/ChatBox";
import InputBox from "./components/InputBox";
import MessageManager from "./kernel/messageManager";
import MessageBox from "./components/MessageBox";

const messageManger = new MessageManager();

function App() {
  const [isResponding, setIsResponding] = useState(false);
  const [messages, setMessages] = useState(
    messageManger.getDisplayableMessages()
  );

  const handleSubmit = async (text) => {
    try {
      setIsResponding(true);
      await messageManger.pushQuestion(text);
      // shallow copy to force re-render of messages
      const newMessages = Object.assign(
        [],
        messageManger.getDisplayableMessages()
      );
      setMessages(newMessages);
      await messageManger.requestAnswer(text);
      setMessages(messageManger.getDisplayableMessages());
    } catch (e) {
      console.log(e);
    } finally {
      setIsResponding(false);
    }
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
        <InputBox onSubmit={handleSubmit} isActive={!isResponding} />
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
