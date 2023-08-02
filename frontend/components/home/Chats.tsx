import React from 'react';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import ChatCard from './ChatCard';


const Chats = () => {
    return (
        <div className='w-[20%] bg-[#000000] bg-opacity-40 h-screen p-8'>
            <div className='text-center font-medium text-[20px]'>
                Your Chats
            </div>
            <div className='mt-5'>
                <ChatCard image = {img1} name = "Jasmine Brar" id = "@jassy"/>
                <ChatCard image = {img2} name = "Baibhav Cox" id = "@cox"/>
            </div>
        </div>
    );
};

export default Chats;