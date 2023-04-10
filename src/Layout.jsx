import React from "react";
import { SideBar, TopBar } from "./components";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <SideBar />
      <div className="content">
        <TopBar />

        <NavLink index />
        <NavLink to="/sample" />

        <Outlet />
      </div>
    </>
  );
};

export default Layout;
