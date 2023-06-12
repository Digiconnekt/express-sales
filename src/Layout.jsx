import React, { useEffect, useState } from "react";
import { Loading, SideBar, TopBar } from "./components";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const { loggedUser } = useSelector((state) => state.user);
  const Navigate = useNavigate();

  useEffect(() => {
    if (!loggedUser?.data?.token) {
      Navigate("/login");
    }
    setLoading(false);
  }, [loggedUser, Navigate]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <SideBar />
      <div className="content">
        <TopBar />

        <NavLink to="/" />
        <NavLink to="/super" />
        <NavLink to="/admin" />

        <Outlet />
      </div>
    </>
  );
};

export default Layout;
