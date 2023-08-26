import React from "react";
import Header from "./Header";
import Conversation from "./Conversation";
import MessageBar from "./MessageBar";

interface ChatWindowProps {
  chatId: string;
}

const ChatWindow: React.FC<ChatWindowProps> = (props) => {
  return (
    <div className="flex w-full">
      <div className="w-full flex-col">
        <Header chatId={props.chatId} />
        <Conversation />
        <MessageBar />
      </div>
      <div className='border-l-[1px] border-gray-600 h-screen w-[500px]'></div>
    </div>
    
  );
};

export default ChatWindow;
