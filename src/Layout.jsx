import React, { useEffect, useState } from "react";
import { Loading, SideBar, TopBar } from "./components";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const { loggedUser } = useSelector((state) => state.user);
  console.log("🚀 ~ file: Layout.jsx:8 ~ Layout ~ loggedUser:", loggedUser);
  const Navigate = useNavigate();

  useEffect(() => {
    if (!loggedUser.email) {
      Navigate("/login");
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [loggedUser, Navigate]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

export default Layout;
