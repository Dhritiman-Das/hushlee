import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice"
import profileSetupReducer, { profileSetupSlice } from "./features/profileSetup-slice"
import { TypedUseSelectorHook, useSelector } from "react-redux";
import homeSlice from "./features/home-slice";
import chatSlice from "./features/chat-slice";

export const store = configureStore({
    reducer: {
        authReducer,
        profileSetup: profileSetupSlice.reducer,
        home: homeSlice.reducer,
        chat: chatSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;