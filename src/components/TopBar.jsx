import React, { useState } from "react";
import { Bell, User, Key, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import { toast } from "react-toastify";

const TopBar = () => {
  const { loggedUser } = useSelector((state) => state.user);

  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const [toogleProfileDropdown, setToogleProfileDropdown] = useState(false);

  const logoutHandler = () => {
    Dispatch(logout());
    Navigate("/login");
    toast.success("Logged Out");
  };

  return (
    <>
      <div className="top-bar">
        <nav
          aria-label="breadcrumb"
          className="-intro-x mr-auto hidden sm:flex"
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <NavLink to="/">Express Sales</NavLink>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>
        <div className="intro-x relative mr-3 sm:mr-6">
          <a className="notification sm:hidden" href="">
            <Bell className="notification__icon dark:text-slate-500" />
          </a>
        </div>
        <div className="intro-x dropdown mr-auto sm:mr-6">
          <div
            className="dropdown-toggle notification notification--bullet cursor-pointer"
            role="button"
            aria-expanded="false"
            data-tw-toggle="dropdown"
          >
            <Bell
              data-lucide="bell"
              className="notification__icon dark:text-slate-500"
            />
          </div>
          <div className="notification-content pt-2 dropdown-menu">
            <div className="notification-content__box dropdown-content">
              <div className="notification-content__title">Notifications</div>
              <div className="cursor-pointer relative flex items-center ">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img
                    alt="Midone - HTML Admin Template"
                    className="rounded-full"
                    src="../assets/images/profile-7.jpg"
                  />
                  <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <div className="flex items-center">
                    <a href="#" className="font-medium truncate mr-5">
                      Kevin Spacey
                    </a>
                    <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                      01:10 PM
                    </div>
                  </div>
                  <div className="w-full truncate text-slate-500 mt-0.5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#039;s standard dummy text ever since the 1500
                  </div>
                </div>
              </div>
              <div className="cursor-pointer relative flex items-center mt-5">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img
                    alt="Midone - HTML Admin Template"
                    className="rounded-full"
                    src="../assets/images/profile-2.jpg"
                  />
                  <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <div className="flex items-center">
                    <a href="#" className="font-medium truncate mr-5">
                      Johnny Depp
                    </a>
                    <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                      01:10 PM
                    </div>
                  </div>
                  <div className="w-full truncate text-slate-500 mt-0.5">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 20
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative intro-x dropdown w-8 h-8">
          <div
            onClick={() => setToogleProfileDropdown(!toogleProfileDropdown)}
            className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
          >
            <img
              alt="Midone - HTML Admin Template"
              src="../../assets/images/profile-5.jpg"
            />
          </div>
          {toogleProfileDropdown && (
            <div className="w-56 absolute right-0 mt-2">
              <ul className="dropdown-content bg-primary text-white relative w-full rounded-md p-2">
                <li className="p-2">
                  <div className="font-medium">{loggedUser.data.name}</div>
                  <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">
                    {loggedUser.data.role}
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider border-white/[0.08] my-2 -mx-2" />
                </li>
                <li>
                  <a
                    href=""
                    className="dropdown-item hover:bg-white/5 flex items-center rounded-md p-2"
                  >
                    <User className="w-4 h-4 mr-2" /> Profile
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="dropdown-item hover:bg-white/5 flex items-center rounded-md p-2"
                  >
                    <Key className="w-4 h-4 mr-2" /> Reset Password
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider border-white/[0.08] my-2 -mx-2" />
                </li>
                <li
                  onClick={logoutHandler}
                  className="dropdown-item hover:bg-white/5 flex items-center rounded-md p-2 cursor-pointer"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TopBar;
