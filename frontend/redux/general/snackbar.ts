import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ISnackbar {
  open: boolean;
  message: string;
  type: "error" | "warning" | "info" | "success";
}
const initialState: ISnackbar = {
  open: false,
  message: "",
  type: "info",
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    toggleSnackBar(state, action: PayloadAction<boolean>) {
      if (action.payload === false) {
        state.message = "";
      }
      state.open = action.payload;
    },
    setSnackbarMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
    setSnackbar(
      state,
      action: PayloadAction<{
        message: string;
        type: ISnackbar["type"];
      }>
    ) {
      const { message, type } = action.payload;
      state.message = message;
      state.type = type;
    },
  },
});

export const snackbarActions = snackbarSlice.actions;

export default snackbarSlice;
