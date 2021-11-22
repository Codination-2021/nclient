import { useEffect, useState } from "react";
import BotMessage from "./BotSystem/BotMessage";
import API from "./ChatApi/ChatAPI";
import "./ChatSystem.css"
import Header from "./Header/Header";
import Input from "./Input/Input";
import Messages from "./Messages/Messages";
import UserMessage from "./UserSystem/UserMessage";
function ChatSystem() {
    const [messages, setMessages] = useState([]);
  
    useEffect(() => {
      async function loadWelcomeMessage() {
        setMessages([
          <BotMessage
            key="0"
            fetchMessage={async () => await API.GetChatbotResponse("hi")}
          />
        ]);
      }
      loadWelcomeMessage();
    }, []);
  
    const send = async text => {
      const newMessages = messages.concat(
        <UserMessage key={messages.length + 1} text={text} />,
        <BotMessage
          key={messages.length + 2}
          fetchMessage={async () => await API.GetChatbotResponse(text)}
        />
      );
      setMessages(newMessages);
    };
  
    return (
      <div className="chatbot">
        <Header />
        <Messages messages={messages} />
        <Input onSend={send} />
      </div>
    );
  }
  export default ChatSystem;