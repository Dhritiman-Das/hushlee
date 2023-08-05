import React, {useState} from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { chatActions } from '@/redux/features/chat-slice';

const MessageBar = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch<AppDispatch> ();
    const data = useAppSelector((state) => state.chat);
    console.log(data.messages);
    

    const handleSendMessage = () => {
        if (message.trim()) {
            dispatch(chatActions.addMessage({content: message, sender: 'me'}));
            setMessage('');
        }
    }    

    return (
        <div className='mx-[60px] my-2'>
            <Box display="flex" alignItems="center">
                <TextField
                    label="Type your message"
                    variant="outlined"
                    fullWidth
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button variant="contained" onClick={handleSendMessage} className='ml-3 rounded-lg px-5'>
                    Send
                </Button>
            </Box>
        </div>
    );
};

export default MessageBar;