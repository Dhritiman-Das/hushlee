import { useAppSelector } from '@/redux/store';
import React from 'react';
import Message from './Message';

const Conversation = () => {
    const messages = useAppSelector((state) => state.chat.messages);
    return (
        <div className='flex-grow h-[70%] overflow-y-auto mx-[50px]'>
            {messages.map((item) => (
                <>
                {item.sender == 'me' && (
                    <Message sender='me' message={item.content} />
                )}
                {item.sender == 'reply' && <Message sender='reply' message={item.content} />}
                </>
            ))}
        </div>
    );
};

export default Conversation;