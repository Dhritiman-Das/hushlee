"use client";

import Body from "@/components/home/Body";
import Chats from "@/components/home/Chats";
import Header from "@/components/home/Header";
import { useAppSelector } from "@/redux/store";
import React, { useEffect } from "react";
import Link from "next/link";

const Page = () => {
  const chatOpen = useAppSelector((state) => state.home.chatOpen);
  const openChatId = Object.keys(chatOpen).find((id) => chatOpen[id]);
  const navigateToChat = () => {
    if (openChatId) {
      const encodedChatId = encodeURIComponent(openChatId);
      window.location.href = `/chat/${encodedChatId}`;
    }
  };

  useEffect(() => {
    navigateToChat(); // Call the navigation function on component mount
  }, [openChatId]);

  return (
    <div className="flex flex-col h-screen overflow-hidden text-textColor">
      <Header />
      <div className="bg-background h-full flex flex-grow">
        <Chats />
        <Body />
      </div>
      {openChatId && (
        <button onClick={navigateToChat}>Go to Chat with Open Chat Id</button>
      )}
    </div>
  );
};

export default Page;
