import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/SideMenu";
import AdminDashboard from "../pages/AdminDashboard";
import Nfc from "../pages/NFC";
import NfcHistory from "../pages/NFC/History";
import CompanyDashboard from "../pages/CompanyDashboard";
import StoreDashboard from "../pages/StoreDashboard";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";

import CompanyCreate from "../pages/Company/Create";
import StoreCreate from "../pages/Store/Create";
import EmployeeCreate from "../pages/Employee/Create";

function Router() {
  const routes = [
    {
      path: "/",
      element: <SideMenu />,
      children: [
        {
          path: "/",
          element: <AdminDashboard />,
        },
        {
          path: "/nfc",
          element: <Nfc />,
        },
        {
          path: "/nfc/history/:nfcId",
          element: <NfcHistory />,
        },
        {
          path: "/company",
          element: <CompanyDashboard />,
        },
        {
          path: "/company/create",
          element: <CompanyCreate />,
        },
        {
          path: "/store",
          element: <StoreDashboard />,
        },
        {
          path: "/store/create",
          element: <StoreCreate />,
        },
        {
          path: "/employee/create",
          element: <EmployeeCreate />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
