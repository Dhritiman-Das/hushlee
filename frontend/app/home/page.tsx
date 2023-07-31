import Body from '@/components/home/Body';
import Chats from '@/components/home/Chats';
import Header from '@/components/home/Header';
import React from 'react';

const page = () => {
    return (
        <div className='flex flex-col h-screen overflow-hidden text-textColor'>
            <Header />
            <div className='bg-background h-fit flex'>
                <Chats />
                <Body />    
            </div>
        </div>
        
    );
};

export default page;