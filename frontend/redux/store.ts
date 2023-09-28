import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import authReducer from './features/auth-slice';
import {
  profileSetupSlice,
} from './features/profileSetup-slice';
import homeSlice from './features/home-slice';
import chatSlice from './features/chat-slice';
import snackbarSlice from './general/snackbar';
import themeSlice from './general/theme';

export const store = configureStore({
  reducer: {
    authReducer,
    profileSetup: profileSetupSlice.reducer,
    home: homeSlice.reducer,
    chat: chatSlice.reducer,
    snackbar: snackbarSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
