import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedUser: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedUser: (state, action) => {
      state.loggedUser = action.payload;
    },
    logout: (state, action) => {
      state.loggedUser = {};
    },
  },
});

export const { loggedUser, logout } = userSlice.actions;

export default userSlice.reducer;
