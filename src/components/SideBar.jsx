import { React, useState } from "react";
import { Home, ChevronDown, ChevronUp, Building2, Box } from "lucide-react";

const SideBar = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const sideMenuOpenStyle = {
    display: "block",
  };

  return (
    <>
      <nav className="side-nav">
        <a href="" className="intro-x flex items-center pl-5 pt-4">
          <img
            alt="Express Sales"
            className="w-16"
            src="dist/images/express/logo-with-name.png"
          />
        </a>
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
          <li onClick={() => setSideMenuOpen(!sideMenuOpen)}>
            <a href="#" className="side-menu">
              <div className="side-menu__icon">
                <Building2 />
              </div>
              <div className="side-menu__title">
                Companies
                <div className="side-menu__sub-icon ">
                  {sideMenuOpen ? <ChevronUp /> : <ChevronDown />}
                </div>
              </div>
            </a>
            <ul style={sideMenuOpen ? sideMenuOpenStyle : {}}>
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
        </ul>
      </nav>
    </>
  );
};

export default SideBar;
