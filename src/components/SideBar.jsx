import { React, useState } from "react";
import {
  Home,
  ChevronDown,
  ChevronUp,
  Building2,
  Box,
  Warehouse,
  User,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState({
    company: false,
    store: false,
    employee: false,
    myStore: false,
  });

  const handleCompanyClick = () => {
    setSideMenuOpen((prevState) => ({
      ...prevState,
      company: !prevState.company,
    }));
  };

  const handleStoreClick = () => {
    setSideMenuOpen((prevState) => ({
      ...prevState,
      store: !prevState.store,
    }));
  };

  const handleEmployeeClick = () => {
    setSideMenuOpen((prevState) => ({
      ...prevState,
      employee: !prevState.employee,
    }));
  };

  const handleMyStoreClick = () => {
    setSideMenuOpen((prevState) => ({
      ...prevState,
      myStore: !prevState.myStore,
    }));
  };

  const sideMenuOpenStyle = {
    display: "block",
  };

  return (
    <>
      <nav className="side-nav">
        <NavLink to="/" className="intro-x flex items-center pl-5 pt-4">
          <img
            alt="Express Sales"
            className="w-32"
            src="../dist/images/express/logo-white-text-right.png"
          />
        </NavLink>
        <div className="side-nav__devider my-6"></div>
        <ul>
          <li>
            <a href="#" className="side-menu side-menu--active">
              <div className="side-menu__icon">
                <Home />
              </div>
              <div className="side-menu__title">Dashboard</div>
            </a>
          </li>
          <li onClick={handleCompanyClick}>
            <a href="#" className="side-menu">
              <div className="side-menu__icon">
                <Building2 />
              </div>
              <div className="side-menu__title">
                Companies
                <div className="side-menu__sub-icon ">
                  {sideMenuOpen.company ? <ChevronUp /> : <ChevronDown />}
                </div>
              </div>
            </a>
            <ul style={sideMenuOpen.company ? sideMenuOpenStyle : {}}>
              <li>
                <a href="index.html" className="side-menu">
                  <div className="side-menu__icon">
                    <Box />
                  </div>
                  <div className="side-menu__title"> Digiconnekt </div>
                </a>
              </li>
              <li>
                <a
                  href="simple-menu-light-dashboard-overview-1.html"
                  className="side-menu"
                >
                  <div className="side-menu__icon">
                    <Box />
                  </div>
                  <div className="side-menu__title"> Buildnetic </div>
                </a>
              </li>
              <li>
                <a
                  href="top-menu-light-dashboard-overview-1.html"
                  className="side-menu"
                >
                  <div className="side-menu__icon">
                    <Box />
                  </div>
                  <div className="side-menu__title"> HireSlick </div>
                </a>
              </li>
            </ul>
          </li>

          <li onClick={handleStoreClick}>
            <a href="#" className="side-menu">
              <div className="side-menu__icon">
                <Warehouse />
              </div>
              <div className="side-menu__title">
                Stores
                <div className="side-menu__sub-icon ">
                  {sideMenuOpen.store ? <ChevronUp /> : <ChevronDown />}
                </div>
              </div>
            </a>
            <ul style={sideMenuOpen.store ? sideMenuOpenStyle : {}}>
              <li>
                <a href="index.html" className="side-menu">
                  <div className="side-menu__icon">
                    <Box />
                  </div>
                  <div className="side-menu__title"> Store 1 </div>
                </a>
              </li>
              <li>
                <a
                  href="simple-menu-light-dashboard-overview-1.html"
                  className="side-menu"
                >
                  <div className="side-menu__icon">
                    <Box />
                  </div>
                  <div className="side-menu__title"> Store 2 </div>
                </a>
              </li>
            </ul>
          </li>

          <li onClick={handleEmployeeClick}>
            <a href="#" className="side-menu">
              <div className="side-menu__icon">
                <User />
              </div>
              <div className="side-menu__title">
                Employees
                <div className="side-menu__sub-icon ">
                  {sideMenuOpen.employee ? <ChevronUp /> : <ChevronDown />}
                </div>
              </div>
            </a>
            <ul style={sideMenuOpen.employee ? sideMenuOpenStyle : {}}>
              <li>
                <a href="index.html" className="side-menu">
                  <div className="side-menu__icon">
                    <Box />
                  </div>
                  <div className="side-menu__title"> Bharat Kumar </div>
                </a>
              </li>
              <li>
                <a
                  href="simple-menu-light-dashboard-overview-1.html"
                  className="side-menu"
                >
                  <div className="side-menu__icon">
                    <Box />
                  </div>
                  <div className="side-menu__title"> John Doe </div>
                </a>
              </li>
            </ul>
          </li>

          <li onClick={handleMyStoreClick}>
            <a href="#" className="side-menu">
              <div className="side-menu__icon">
                <Warehouse />
              </div>
              <div className="side-menu__title">
                My Stores
                <div className="side-menu__sub-icon ">
                  {sideMenuOpen.myStore ? <ChevronUp /> : <ChevronDown />}
                </div>
              </div>
            </a>
            <ul style={sideMenuOpen.myStore ? sideMenuOpenStyle : {}}>
              <li>
                <a href="index.html" className="side-menu">
                  <div className="side-menu__icon">
                    <Box />
                  </div>
                  <div className="side-menu__title"> My Store 1 </div>
                </a>
              </li>
              <li>
                <a
                  href="simple-menu-light-dashboard-overview-1.html"
                  className="side-menu"
                >
                  <div className="side-menu__icon">
                    <Box />
                  </div>
                  <div className="side-menu__title"> My Store 2 </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SideBar;
