import { createSlice } from "@reduxjs/toolkit";

const colorSchemes = ["default", "theme-1", "theme-2", "theme-3", "theme-4"];

const getColorScheme = () => {
  const colorScheme = localStorage.getItem("colorScheme");
  return colorSchemes.filter((item, key) => {
    return item === colorScheme;
  })[0];
};

const initialState = {
  value:
    localStorage.getItem("colorScheme") === null ? "default" : getColorScheme(),
};

export const colorSchemeSlice = createSlice({
  name: "colorScheme",
  initialState,
  reducers: {
    setColorScheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setColorScheme } = colorSchemeSlice.actions;

export const selectColorScheme = (state) => {
  if (localStorage.getItem("colorScheme") === null) {
    localStorage.setItem("colorScheme", "default");
  }

  return state.colorScheme.value;
};

export default colorSchemeSlice.reducer;
