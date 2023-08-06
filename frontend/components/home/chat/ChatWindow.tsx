import React from "react";
import Header from "./Header";
import Conversation from "./Conversation";
import MessageBar from "./MessageBar";

interface ChatWindowProps {
  chatId: string;
}

const ChatWindow: React.FC<ChatWindowProps> = (props) => {
  return (
    <div className="w-full flex-col">
      <Header chatId={props.chatId} />
      <Conversation />
      <MessageBar />
    </div>
  );
};

export default ChatWindow;
