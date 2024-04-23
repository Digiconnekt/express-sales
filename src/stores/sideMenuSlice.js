import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: [
    {
      icon: "Home",
      pathname: "/",
      title: "Dashboard",
      show: {
        master: true,
        "company-manager": false,
      },
    },
    {
      icon: "Home",
      pathname: "/company",
      title: "Company",
      show: {
        master: true,
        "company-manager": true,
      },
    },
    {
      icon: "Wifi",
      pathname: "/nfc",
      title: "NFC",
      show: {
        master: true,
        "company-manager": true,
      },
    },
    {
      icon: "Bell",
      pathname: "/notification",
      title: "Send Notification",
      show: {
        master: true,
        "company-manager": true,
      },
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
