"use client"

import ChatWindow from '@/components/home/chat/ChatWindow';
import Chats from '@/components/home/Chats';
import Header from '@/components/home/Header';
import React, {useEffect} from 'react';


const page = () => {
    const [openChatId, setOpenChatId] = React.useState('');

    useEffect(() => {
        const pathname = window.location.pathname;
        const chatId = pathname.split('/chat/')[1];
        setOpenChatId(chatId || '');
      }, []);

      
    
    
    return (
        <div className='flex flex-col h-screen overflow-hidden text-textColor'>
            <Header />
            <div className='bg-background h-full flex flex-grow'>
                <Chats />
                <ChatWindow chatId={openChatId  }/>
            </div>

        </div>
    );
};

export default page;