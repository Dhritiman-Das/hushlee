import React from 'react';

interface MessageBubbleProps {
    sender: string;
    message: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = (props) => {
    return (
        <>
            <div
                className={`min-h-[45px] max-w-[500px] flex items-center px-5 py-3 bg-gradient-to-br ${
                props.sender == 'me' &&
                "text-gray-200 from-teal-500 to-teal-700 shadow-sm shadow-gray-600 rounded-2xl"
                } ${
                props.sender == 'reply' &&
                "text-gray-200 from-[#FF8C6F] to-[#FF6347] shadow-sm shadow-gray-600 rounded-2xl"
                } `}
            >
                {props.message}
            </div>
        </>
        
    );
};

export default MessageBubble;