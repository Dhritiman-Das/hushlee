import React from 'react';
import ProfileIcon from './ProfileIcon';
import MessageBubble from './MessageBubble';

interface MessageProps {
    sender: string;
    message: string;
}

const Message: React.FC<MessageProps> = (props) => {
    return (
        <div>
            {props.sender === 'reply' && (
                <>
                <div className="flex my-3 ml-4 gap-x-4 justify-start">
                    <ProfileIcon sender={props.sender} />
                    <MessageBubble message={props.message} sender={props.sender} />
                </div>
                </>
            )}
            {props.sender === 'me' && (
                <>
                <div className="flex my-3 mr-4 gap-x-4 justify-end">
                    <MessageBubble message={props.message} sender={props.sender} />
                    <ProfileIcon sender={props.sender} />
                </div>
                </>
            )}
        </div>
    );
};

export default Message;