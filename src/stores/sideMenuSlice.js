import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: [
    {
      icon: "Home",
      pathname: "/",
      title: "Dashboard",
    },
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
