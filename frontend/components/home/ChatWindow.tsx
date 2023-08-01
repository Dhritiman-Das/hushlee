import React from 'react';

interface ChatWindowProps {
    chatId: string;
}

const ChatWindow: React.FC<ChatWindowProps> = (props) => {
    return (
        <div className='py-11'>
            <div>
                {props.chatId}
            </div>
        </div>
    );
};

export default ChatWindow;