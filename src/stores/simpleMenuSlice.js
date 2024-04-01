import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: [
    {
      icon: "Activity",
      pathname: "/simple-menu/page-1",
      title: "Page 1",
    },
    {
      icon: "Activity",
      pathname: "/simple-menu/page-2",
      title: "Page 2",
    },
  ],
};

export const simpleMenuSlice = createSlice({
  name: "simpleMenu",
  initialState,
  reducers: {},
});

export const selectSimpleMenu = (state) => state.simpleMenu.menu;

export default simpleMenuSlice.reducer;
