import React, { useEffect, useState } from "react";
import { SideBar, TopBar } from "./components";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const { loggedUser } = useSelector((state) => state.user);
  console.log("🚀 ~ file: Layout.jsx:8 ~ Layout ~ loggedUser:", loggedUser);
  const Navigate = useNavigate();

  useEffect(() => {
    if (!loggedUser.accessToken) {
      // Navigate("/login");
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [loggedUser, Navigate]);

  return (
    <>
      {loading ? (
        <div
          className="flex flex-1 justify-center items-center"
          style={{ height: "90vh" }}
        >
          <h1 className="text-white text-3xl">Loading...</h1>
        </div>
      ) : (
        <>
          <SideBar />
          <div className="content">
            <TopBar />

            <NavLink index />
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
