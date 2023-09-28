import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type TModes = 'light' | 'dark';

interface ITheme {
  mode: TModes
}
const initialState: ITheme = {
  mode: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<TModes>) {
      state.mode = action.payload;
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice;
