import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/SideMenu";
import StoreDashboard from "../pages/StoreDashboard";

import Admin from "../pages/Admin";
import Company from "../pages/Company";
import Nfc from "../pages/NFC";
import Login from "../pages/Login";
import NfcHistory from "../pages/NFC/History";
import SendNotification from "../pages/Notification/SendNotification";

import CompanyCreate from "../pages/Company/Create";
import StoreCreate from "../pages/Store/Create";
import EmployeeCreate from "../pages/Employee/Create";

import ErrorPage from "../pages/ErrorPage";

function Router() {
  const routes = [
    {
      path: "/",
      element: <SideMenu />,
      children: [
        {
          path: "/",
          element: <Admin />,
        },
        {
          path: "/company",
          element: <Company />,
        },
        {
          path: "/store",
          element: <StoreDashboard />,
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
          path: "/company/create",
          element: <CompanyCreate />,
        },
        {
          path: "/store/create",
          element: <StoreCreate />,
        },
        {
          path: "/employee/create",
          element: <EmployeeCreate />,
        },
        {
          path: "/notification",
          element: <SendNotification />,
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
