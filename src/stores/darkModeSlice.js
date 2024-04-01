import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("darkMode") === "true",
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDarkMode } = darkModeSlice.actions;

export const selectDarkMode = (state) => {
  if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem("darkMode", "false");
  }

  return state.darkMode.value;
};

export default darkModeSlice.reducer;
