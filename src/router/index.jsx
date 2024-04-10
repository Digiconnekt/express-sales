import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/SideMenu";
import AdminDashboard from "../pages/AdminDashboard";
import CompanyDashboard from "../pages/CompanyDashboard";
import StoreDashboard from "../pages/StoreDashboard";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";

import CompanyCreate from "../pages/Company/Create";
import StoreCreate from "../pages/Store/Create";

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
