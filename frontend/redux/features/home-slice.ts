import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HomeState = {
  chatOpen: Record<string, boolean>;
};

const initialState: HomeState = {
  chatOpen: {},
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    toggleChatOpen: (state, action: PayloadAction<{ id: string; open: boolean }>) => {
      const { id, open } = action.payload;
      state.chatOpen[id] = open;
    },
  },
});

export const homeActions = homeSlice.actions;

export default homeSlice;