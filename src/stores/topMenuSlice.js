import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: [
    {
      icon: "Activity",
      pathname: "/top-menu/page-1",
      title: "Page 1",
    },
    {
      icon: "Activity",
      pathname: "/top-menu/page-2",
      title: "Page 2",
    },
  ],
};

export const topMenuSlice = createSlice({
  name: "topMenu",
  initialState,
  reducers: {},
});

export const selectTopMenu = (state) => state.topMenu.menu;

export default topMenuSlice.reducer;
