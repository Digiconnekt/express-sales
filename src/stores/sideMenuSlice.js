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
        "store-manager": false,
      },
    },
    {
      icon: "Home",
      pathname: "/company",
      title: "Dashboard",
      show: {
        master: false,
        "company-manager": true,
        "store-manager": false,
      },
    },
    {
      icon: "Home",
      pathname: "/store",
      title: "Dashboard",
      show: {
        master: false,
        "company-manager": false,
        "store-manager": true,
      },
    },
    {
      icon: "Wifi",
      pathname: "/nfc",
      title: "NFC",
      show: {
        master: true,
        "company-manager": true,
        "store-manager": true,
      },
    },
    {
      icon: "Bell",
      pathname: "/notification",
      title: "Notification",
      show: {
        master: true,
        "company-manager": true,
        "store-manager": true,
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
