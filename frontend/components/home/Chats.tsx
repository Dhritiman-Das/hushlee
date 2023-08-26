import React from 'react';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import ChatCard from './ChatCard';
import { AiOutlineSearch } from 'react-icons/ai';
import '../styles/scrollbar.css'


const Chats = () => {
    return (
        <div className='w-[20%] bg-[#000000] bg-opacity-20 h-screen py-5'>
            <div className='text-center font-bold text-[20px]'>
                Chats
            </div>
            <div className="h-[32px] mt-3 text-center px-5">
                <input
                type="text"
                placeholder="Search chats"
                className="bg-gray-300 w-[250px] px-9 py-1 outline-none rounded-2xl shadow-md"
                />
                <AiOutlineSearch className="relative top-[-27px] left-[15px] text-[22px]" />
            </div>
            <div className='mt-5 overflow-auto max-h-[calc(100vh-176px)] pb-8'>
                <ChatCard image = {img1} name = "Jasmine Brar" id = "jassy" recentMsg = "Let's meet, please." time = "1 d"/>
                <ChatCard image = {img2} name = "Baibhav Cox" id = "cox" recentMsg = "Hi! How are you?" time = "2 w"/>
                <ChatCard image = {img1} name = "Jasmine Brar" id = "jassy" recentMsg = "Let's meet, please." time = "1 d"/>
                <ChatCard image = {img1} name = "Jasmine Brar" id = "jassy" recentMsg = "Let's meet, please." time = "1 d"/>
                <ChatCard image = {img2} name = "Baibhav Cox" id = "cox" recentMsg = "Hi! How are you?" time = "2 w"/>
                <ChatCard image = {img2} name = "Baibhav Cox" id = "cox" recentMsg = "Hi! How are you?" time = "2 w"/>
                <ChatCard image = {img2} name = "Baibhav Cox" id = "cox" recentMsg = "Hi! How are you?" time = "2 w"/>
                <ChatCard image = {img1} name = "Jasmine Brar" id = "jassy" recentMsg = "Let's meet, please." time = "1 d"/>
                <ChatCard image = {img1} name = "Jasmine Brar" id = "jassy" recentMsg = "Let's meet, please." time = "1 d"/>
                <ChatCard image = {img1} name = "Jasmine Brar" id = "jassy" recentMsg = "Let's meet, please." time = "1 d"/>
                <ChatCard image = {img1} name = "Jasmine Brar" id = "jassy" recentMsg = "Let's meet, please." time = "1 d"/>
                <ChatCard image = {img1} name = "Jasmine Brar" id = "jassy" recentMsg = "Let's meet, please." time = "1 d"/>
            </div>
        </div>
    );
};

export default Chats;