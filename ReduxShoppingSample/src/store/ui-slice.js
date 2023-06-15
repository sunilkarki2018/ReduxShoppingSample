import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { notification: null, showCart: false, changed: false },
  reducers: {
    showNotification(state, action) {
      if ((action.payload.type = "success")) {
        state.showCart = true;
        state.changed = true;
      }
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
