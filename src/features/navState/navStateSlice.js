import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const navStateSlice = createSlice({
  name: "navToggle",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = navStateSlice.actions;

export default navStateSlice.reducer;
