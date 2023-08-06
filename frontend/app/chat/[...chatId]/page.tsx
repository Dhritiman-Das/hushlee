"use client";

import ChatWindow from "@/components/home/ChatWindow";
import Chats from "@/components/home/Chats";
import Header from "@/components/home/Header";
import React, { useEffect } from "react";

const Page = () => {
  const [openChatId, setOpenChatId] = React.useState("");

  useEffect(() => {
    const pathname = window.location.pathname;
    const chatId = pathname.split("/chat/")[1];
    setOpenChatId(chatId || "");
  }, []);

  console.log(openChatId);

  return (
    <div className="flex flex-col h-screen overflow-hidden text-textColor">
      <Header />
      <div className="bg-background h-full flex flex-grow">
        <Chats />
        <ChatWindow chatId={openChatId} />
      </div>
    </div>
  );
};

export default Page;
