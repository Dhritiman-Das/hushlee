import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Message = {
    id: number; 
    content: string;
    timestamp: number;
    sender: 'me' | 'reply'
};

type ChatState = {
    messages: Message[];
    messageIdCounter: number;
}

const initialState: ChatState = {
    messages: [],
    messageIdCounter: 1,
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<{ content: string; sender: 'me' | 'reply' }>) => {
            const newMessage: Message = {
              id: state.messageIdCounter,
              content: action.payload.content,
              timestamp: Date.now(),
              sender: action.payload.sender,
            };
            state.messages.push(newMessage);
            state.messageIdCounter += 1;
        },
    }
});

export const chatActions = chatSlice.actions;

export default chatSlice;