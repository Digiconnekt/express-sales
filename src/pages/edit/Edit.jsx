import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { SideBar, TopBar } from "../../components";

const Edit = () => {
  return (
    <>
      <SideBar />
      <div className="content">
        <TopBar />
        <NavLink to="/company" />
        <NavLink to="/sales-employee" />
        <NavLink to="/store" />

        <Outlet />
      </div>
    </>
  );
};

export default Edit;
